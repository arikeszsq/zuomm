<?php


namespace App\Http\Controllers\Tv;


use App\Helpers\getTvData;
use App\Helpers\OptionMap;
use App\Http\Controllers\Controller;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;

class IndexController extends Controller
{
    public $getTvDataHelper;
    public $dateText = '';
    public $weatherText = '';

    public function __construct(getTvData $getTvDataHelper)
    {
        $this->getTvDataHelper = $getTvDataHelper;
        if (Cache::get('WEATHER')) {
            $weather = json_decode(Cache::get('WEATHER'));
        } else {
            //阿里云屏蔽了百度接口，用oms中转一下
            $data = file_get_contents("http://t.o-hr.cn:8080/interface/weather/wujiang");
//            $data = file_get_contents("http://api.map.baidu.com/weather/v1/?district_id=320509&data_type=all&ak=d1ekyqOp6NcLz0ofEq3MWWXA0Gq2WQac");
            Cache::set('WEATHER', $data, 4 * 3600);
            $weather = json_decode($data);
        }
        $weatherText = '今天 ' . $weather->result->now->text . ' ' . $weather->result->now->temp . '℃';// . $weather->result->now->wind_dir . $weather->result->now->wind_class;
        $weatherText .= ' | 明天 ' . $weather->result->forecasts[1]->text_day . ' ' . $weather->result->forecasts[1]->low . '℃～' . $weather->result->forecasts[1]->high . '℃';

        $this->weatherText = $weatherText;

        $dateText = date('Y-m-d');
        $weekArray = array(
            "1" => "一",
            "2" => "二",
            "3" => "三",
            "4" => "四",
            "5" => "五",
            "6" => "六",
            "7" => "日",
        );
        $dateText .= ' 星期'.$weekArray[Carbon::now()->dayOfWeek];
        $this->dateText = $dateText;
    }

    public function build()
    {
        $this->getTvDataHelper->build();
        echo 'success';
    }

    public function home()
    {
        $personCountByProvince = $this->getTvDataHelper->getPersonCountByProvince();
        $personCountByGender = $this->getTvDataHelper->getPersonCountByGender();
        $personCountByEducation = $this->getTvDataHelper->getPersonCountByEducation();
        $personCountByAge = $this->getTvDataHelper->getPersonCountByAge();
        return view('home', [
            'dateText'=>$this->dateText,
            'weatherText'=>$this->weatherText,
            'personCountByProvince' => $personCountByProvince,
            'personCountByGender' => $personCountByGender,
            'personCountByEducation' => $personCountByEducation,
            'personCountByAge' => $personCountByAge,
        ]);
    }

    public function company()
    {
        $companyEconomicType = $this->getTvDataHelper->getCompanyEconomicType();
        $companyIndustry = [];
        $personCountByCompany = [];
        foreach (OptionMap::AREA_MAP as $areaKey => $value) {
            $companyIndustry[OptionMap::IMAGE_MAP_NAME[$areaKey]] = $this->getTvDataHelper->getCompanyIndustry($areaKey);
            $personCountByCompany[OptionMap::IMAGE_MAP_NAME[$areaKey]] = $this->getTvDataHelper->getPersonCountByCompany($areaKey);
        }
        return view('company', [
            'dateText'=>$this->dateText,
            'weatherText'=>$this->weatherText,
            'companyEconomicType' => $companyEconomicType,
            'personCountByCompany' => $personCountByCompany,
            'companyIndustry' => $companyIndustry,
        ]);
    }

    public function person()
    {
        return view('person');
    }

    public function trend()
    {
        $personCountByArea = $this->getTvDataHelper->getPersonCountByArea();
        $companyEconomicType = $this->getTvDataHelper->getCompanyEconomicType();
        $companyLaborShortage = [];
        foreach (OptionMap::AREA_MAP as $areaKey => $value) {
            $companyLaborShortage[OptionMap::IMAGE_MAP_NAME[$areaKey]] = $this->getTvDataHelper->getCompanyLaborShortage($areaKey);
        }
        return view('trend', [
            'dateText'=>$this->dateText,
            'weatherText'=>$this->weatherText,
            'companyEconomicType' => $companyEconomicType,
            'personCountByArea' => $personCountByArea,
            'companyLaborShortage' => $companyLaborShortage
        ]);
    }

    public function area($area)
    {
        $personCountByProvince = $this->getTvDataHelper->getPersonCountByProvince($area);
        $personCountByGender = $this->getTvDataHelper->getPersonCountByGender($area);
        $personCountByEducation = $this->getTvDataHelper->getPersonCountByEducation($area);
        $personCountByAge = $this->getTvDataHelper->getPersonCountByAge($area);
        $companyIndustry = $this->getTvDataHelper->getCompanyIndustry($area);
        $companyEconomicType = $this->getTvDataHelper->getCompanyEconomicType($area);
        $companyLaborShortage = $this->getTvDataHelper->getCompanyLaborShortage($area);
        return view('area', [
            'dateText'=>$this->dateText,
            'weatherText'=>$this->weatherText,
            'imageName' => OptionMap::IMAGE_MAP_NAME[$area],
            'personCountByProvince' => $personCountByProvince,
            'personCountByGender' => $personCountByGender,
            'personCountByEducation' => $personCountByEducation,
            'personCountByAge' => $personCountByAge,
            'companyIndustry' => $companyIndustry,
            'companyEconomicType' => $companyEconomicType,
            'companyLaborShortage' => $companyLaborShortage,
        ]);
    }
}
