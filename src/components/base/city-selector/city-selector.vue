<template>
  <div class="selector" :class="selectorClass">
    <div class="wrapper" :class="size">
      <div class="select" @click="toggleShowOptions">
        <input type="button" v-model="label">
        <i class="icon_triangle" :class="{ active: isShowOptions }"></i>
      </div>
      <transition name="drop">
        <div class="options" v-show="isShowOptions">
          <ul class="provinces" ref="provinces">
            <li v-for="(province,index) in provinces" :class="{active: selectedProvinceIndex===index}" @click.stop="changeProvince(index)">{{province.label}}</li>
          </ul>
          <ul class="cities" v-if="provinces[selectedProvinceIndex] && provinces[selectedProvinceIndex].cities">
            <li v-for="(city,index) in provinces[selectedProvinceIndex].cities" :class="{active: city.label===label}" @click.stop="changeCity(index)">{{city.label}}</li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  const provinceLiHeight = 34

  export default {
    name: 'city-selector',
    props: {
      passLabel: {
        type: String
      },
      selectorClass: {
        type: [String, Array, Object]
      },
      size: {
        // 可选项为normal,small,extraSmall
        type: String,
        default: 'normal'
      }
    },
    computed: {
      helperIndex () {
        for (let i = 0; i < this.provinces.length; i++) {
          for (let j = 0; j < this.provinces[i].cities.length; j++) {
            if (this.provinces[i].cities[j].label === this.label) {
              return i + '-' + j
            }
          }
        }
        return -1
      }
    },
    data () {
      return {
        isShowOptions: false,
        label: '',
        value: '',
        provinces: [{
          label: '热门城市',
          value: '0',
          cities: [{
            label: '北京',
            value: 'beijing'
          }, {
            label: '上海',
            value: 'shanghai'
          }, {
            label: '广州',
            value: 'guangzhou'
          }, {
            label: '深圳',
            value: 'shenzhen'
          }, {
            label: '杭州',
            value: 'hangzhou'
          }, {
            label: '成都',
            value: 'chengdu'
          }, {
            label: '西安',
            value: 'xian'
          }, {
            label: '南京',
            value: 'nanjing'
          }, {
            label: '厦门',
            value: 'xiamen'
          }, {
            label: '武汉',
            value: 'wuhan'
          }]
        }, {
          label: '北京',
          value: '1',
          cities: [{
            label: '北京',
            value: 'beijing'
          }]
        }, {
          label: '上海',
          value: '2',
          cities: [{
            label: '上海',
            value: 'shanghai'
          }]
        }, {
          label: '天津',
          value: '3',
          cities: [{
            label: '天津',
            value: 'tianjin'
          }]
        }, {
          label: '重庆',
          value: '4',
          cities: [{
            label: '重庆',
            value: 'chongqing'
          }]
        }, {
          label: '河北',
          value: '5',
          cities: [{
            label: '石家庄',
            value: 'shijiazhuang'
          }, {
            label: '唐山',
            value: 'tangshan'
          }, {
            label: '秦皇岛',
            value: 'qinhuangdao'
          }, {
            label: '邯郸',
            value: 'handan'
          }, {
            label: '邢台',
            value: 'xingtai'
          }, {
            label: '保定',
            value: 'baoding'
          }, {
            label: '张家口',
            value: 'zhangjiakou'
          }, {
            label: '承德',
            value: 'chengde'
          }, {
            label: '沧州',
            value: 'cangzhou'
          }, {
            label: '廊坊',
            value: 'langfang'
          }, {
            label: '衡水',
            value: 'hengshui'
          }]
        }, {
          label: '山西',
          value: '6',
          cities: [{
            label: '太原',
            value: 'taiyuan'
          }, {
            label: '大同',
            value: 'datong'
          }, {
            label: '阳泉',
            value: 'yangquan'
          }, {
            label: '长治',
            value: 'changzhi'
          }, {
            label: '晋城',
            value: 'jincheng'
          }, {
            label: '朔州',
            value: 'shuozhou'
          }, {
            label: '晋中',
            value: 'jinzhong'
          }, {
            label: '运城',
            value: 'yuncheng'
          }, {
            label: '忻州',
            value: 'xinzhou'
          }, {
            label: '临汾',
            value: 'linfen'
          }, {
            label: '吕梁',
            value: 'lvliang'
          }, {
            label: '永济市',
            value: 'yongjishi'
          }]
        }, {
          label: '内蒙古',
          value: '7',
          cities: [{
            label: '呼和浩特',
            value: 'huhehaote'
          }, {
            label: '包头',
            value: 'baotou'
          }, {
            label: '乌海',
            value: 'wuhai'
          }, {
            label: '赤峰',
            value: 'chifeng'
          }, {
            label: '通辽',
            value: 'tongliao'
          }, {
            label: '鄂尔多斯',
            value: 'eerduosi'
          }, {
            label: '呼伦贝尔',
            value: 'hulunbeier'
          }, {
            label: '兴安盟',
            value: 'xinganmeng'
          }, {
            label: '锡林郭勒盟',
            value: 'xilinguolemeng'
          }, {
            label: '乌兰察布',
            value: 'wulanchabu'
          }, {
            label: '巴彦淖尔',
            value: 'bayannaoer'
          }, {
            label: '阿拉善盟',
            value: 'alashanmeng'
          }]
        }, {
          label: '辽宁',
          value: '8',
          cities: [{
            label: '沈阳',
            value: 'shenyang'
          }, {
            label: '大连',
            value: 'dalian'
          }, {
            label: '鞍山',
            value: 'anshan'
          }, {
            label: '抚顺',
            value: 'fushun'
          }, {
            label: '本溪',
            value: 'benxi'
          }, {
            label: '丹东',
            value: 'dandong'
          }, {
            label: '锦州',
            value: 'jinzhou'
          }, {
            label: '营口',
            value: 'yingkou'
          }, {
            label: '阜新',
            value: 'fuxin'
          }, {
            label: '辽阳',
            value: 'liaoyang'
          }, {
            label: '盘锦',
            value: 'panjin'
          }, {
            label: '铁岭',
            value: 'tieling'
          }, {
            label: '朝阳',
            value: 'chaoyang'
          }, {
            label: '葫芦岛',
            value: 'huludao'
          }]
        }, {
          label: '吉林',
          value: '9',
          cities: [{
            label: '长春',
            value: 'changchun'
          }, {
            label: '吉林',
            value: 'jilin'
          }, {
            label: '四平',
            value: 'siping'
          }, {
            label: '辽源',
            value: 'liaoyuan'
          }, {
            label: '通化',
            value: 'tonghua'
          }, {
            label: '白山',
            value: 'baishan'
          }, {
            label: '松原',
            value: 'songyuan'
          }, {
            label: '白城',
            value: 'baicheng'
          }, {
            label: '延边朝鲜族自治州',
            value: 'yanbianchaoxianzuzizhizhou'
          }]
        }, {
          label: '黑龙江',
          value: '10',
          cities: [{
            label: '哈尔滨',
            value: 'haerbin'
          }, {
            label: '齐齐哈尔',
            value: 'qiqihaer'
          }, {
            label: '鸡西',
            value: 'jixi'
          }, {
            label: '鹤岗',
            value: 'hegang'
          }, {
            label: '双鸭山',
            value: 'shuangyashan'
          }, {
            label: '大庆',
            value: 'daqing'
          }, {
            label: '伊春',
            value: 'yichun'
          }, {
            label: '佳木斯',
            value: 'jiamusi'
          }, {
            label: '七台河',
            value: 'qitaihe'
          }, {
            label: '牡丹江',
            value: 'mudanjiang'
          }, {
            label: '黑河',
            value: 'heihe'
          }, {
            label: '绥化',
            value: 'suihua'
          }, {
            label: '大兴安岭地区',
            value: 'daxinganlingdiqu'
          }]
        }, {
          label: '江苏',
          value: '11',
          cities: [{
            label: '南京',
            value: 'nanjing'
          }, {
            label: '苏州',
            value: 'suzhou'
          }, {
            label: '昆山',
            value: 'kunshan'
          }, {
            label: '常熟',
            value: 'changshu'
          }, {
            label: '张家港',
            value: 'zhangjiagang'
          }, {
            label: '无锡',
            value: 'wuxi'
          }, {
            label: '江阴',
            value: 'jiangyin'
          }, {
            label: '徐州',
            value: 'xuzhou'
          }, {
            label: '常州',
            value: 'changzhou'
          }, {
            label: '南通',
            value: 'nantong'
          }, {
            label: '连云港',
            value: 'lianyungang'
          }, {
            label: '淮安',
            value: 'huaian'
          }, {
            label: '盐城',
            value: 'yancheng'
          }, {
            label: '扬州',
            value: 'yangzhou'
          }, {
            label: '镇江',
            value: 'zhenjiang'
          }, {
            label: '泰州',
            value: 'taizhou'
          }, {
            label: '靖江',
            value: 'jingjiang'
          }, {
            label: '宿迁',
            value: 'suqian'
          }, {
            label: '太仓',
            value: 'taicang'
          }]
        }, {
          label: '浙江',
          value: '12',
          cities: [{
            label: '杭州',
            value: 'hangzhou'
          }, {
            label: '宁波',
            value: 'ningbo'
          }, {
            label: '温州',
            value: 'wenzhou'
          }, {
            label: '海宁',
            value: 'haining'
          }, {
            label: '嘉兴',
            value: 'jiaxing'
          }, {
            label: '湖州',
            value: 'huzhou'
          }, {
            label: '绍兴',
            value: 'shaoxing'
          }, {
            label: '金华',
            value: 'jinhua'
          }, {
            label: '衢州',
            value: 'quzhou'
          }, {
            label: '舟山',
            value: 'zhoushan'
          }, {
            label: '台州',
            value: 'taizhou2'
          }, {
            label: '丽水',
            value: 'lishui'
          }, {
            label: '玉环县',
            value: 'yuhuanxian'
          }, {
            label: '方家山',
            value: 'fangjiashan'
          }]
        }, {
          label: '安徽',
          value: '13',
          cities: [{
            label: '合肥',
            value: 'hefei'
          }, {
            label: '芜湖',
            value: 'wuhu'
          }, {
            label: '蚌埠',
            value: 'bengbu'
          }, {
            label: '淮南',
            value: 'huainan'
          }, {
            label: '马鞍山',
            value: 'maanshan'
          }, {
            label: '淮北',
            value: 'huaibei'
          }, {
            label: '铜陵',
            value: 'tongling'
          }, {
            label: '安庆',
            value: 'anqing'
          }, {
            label: '黄山',
            value: 'huangshan'
          }, {
            label: '滁州',
            value: 'chuzhou'
          }, {
            label: '阜阳',
            value: 'fuyang'
          }, {
            label: '宿州',
            value: 'suzhou2'
          }, {
            label: '巢湖',
            value: 'chaohu'
          }, {
            label: '六安',
            value: 'luan'
          }, {
            label: '毫州',
            value: 'haozhou'
          }, {
            label: '池州',
            value: 'chizhou'
          }, {
            label: '宣城',
            value: 'xuancheng'
          }]
        }, {
          label: '福建',
          value: '14',
          cities: [{
            label: '福州',
            value: 'fuzhou'
          }, {
            label: '厦门',
            value: 'xiamen'
          }, {
            label: '莆田',
            value: 'putian'
          }, {
            label: '三明',
            value: 'sanming'
          }, {
            label: '泉州',
            value: 'quanzhou'
          }, {
            label: '泉港区',
            value: 'quangangqu'
          }, {
            label: '漳州',
            value: 'zhangzhou'
          }, {
            label: '南平',
            value: 'nanping'
          }, {
            label: '龙岩',
            value: 'longyan'
          }, {
            label: '宁德',
            value: 'ningde'
          }]
        }, {
          label: '江西',
          value: '15',
          cities: [{
            label: '南昌',
            value: 'nanchang'
          }, {
            label: '景德镇',
            value: 'jingdezhen'
          }, {
            label: '萍乡',
            value: 'pingxiang'
          }, {
            label: '九江',
            value: 'jiujiang'
          }, {
            label: '新余',
            value: 'xinyu'
          }, {
            label: '鹰潭',
            value: 'yingtan'
          }, {
            label: '赣州',
            value: 'ganzhou'
          }, {
            label: '吉安',
            value: 'jian'
          }, {
            label: '宜春',
            value: 'yichun'
          }, {
            label: '抚州',
            value: 'fuzhou2'
          }, {
            label: '上饶',
            value: 'shangrao'
          }]
        }, {
          label: '山东',
          value: '16',
          cities: [{
            label: '济南',
            value: 'jinan'
          }, {
            label: '青岛',
            value: 'qingdao'
          }, {
            label: '淄博',
            value: 'zibo'
          }, {
            label: '枣庄',
            value: 'zaozhuang'
          }, {
            label: '东营',
            value: 'dongying'
          }, {
            label: '烟台',
            value: 'yantai'
          }, {
            label: '潍坊',
            value: 'weifang'
          }, {
            label: '济宁',
            value: 'jining'
          }, {
            label: '泰安',
            value: 'taian'
          }, {
            label: '威海',
            value: 'weihai'
          }, {
            label: '日照',
            value: 'rizhao'
          }, {
            label: '莱芜',
            value: 'laiwu'
          }, {
            label: '临沂',
            value: 'linyi'
          }, {
            label: '德州',
            value: 'dezhou'
          }, {
            label: '聊城',
            value: 'liaocheng'
          }, {
            label: '滨州',
            value: 'binzhou'
          }, {
            label: '菏泽',
            value: 'heze'
          }, {
            label: '章丘',
            value: 'zhangqiu'
          }, {
            label: '荣成',
            value: 'rongcheng'
          }]
        }, {
          label: '河南',
          value: '17',
          cities: [{
            label: '郑州',
            value: 'zhengzhou'
          }, {
            label: '开封',
            value: 'kaifeng'
          }, {
            label: '洛阳',
            value: 'luoyang'
          }, {
            label: '平顶山',
            value: 'pingdingshan'
          }, {
            label: '安阳',
            value: 'anyang'
          }, {
            label: '鹤壁',
            value: 'hebi'
          }, {
            label: '新乡',
            value: 'xinxiang'
          }, {
            label: '焦作',
            value: 'jiaozuo'
          }, {
            label: '濮阳',
            value: 'puyang'
          }, {
            label: '许昌',
            value: 'xuchang'
          }, {
            label: '漯河',
            value: 'luohe'
          }, {
            label: '三门峡',
            value: 'sanmenxia'
          }, {
            label: '南阳',
            value: 'nanyang'
          }, {
            label: '商丘',
            value: 'shangqiu'
          }, {
            label: '信阳',
            value: 'xinyang'
          }, {
            label: '周口',
            value: 'zhoukou'
          }, {
            label: '驻马店',
            value: 'zhumadian'
          }]
        }, {
          label: '湖北',
          value: '18',
          cities: [{
            label: '武汉',
            value: 'wuhan'
          }, {
            label: '黄石',
            value: 'huangshi'
          }, {
            label: '十堰',
            value: 'shiyan'
          }, {
            label: '宜昌',
            value: 'yichang'
          }, {
            label: '襄樊',
            value: 'xiangfan'
          }, {
            label: '鄂州',
            value: 'ezhou'
          }, {
            label: '荆门',
            value: 'jingmen'
          }, {
            label: '孝感',
            value: 'xiaogan'
          }, {
            label: '荆州',
            value: 'jingzhou'
          }, {
            label: '黄冈',
            value: 'huanggang'
          }, {
            label: '咸宁',
            value: 'xianning'
          }, {
            label: '随州',
            value: 'suizhou'
          }, {
            label: '恩施土家族苗族自治州',
            value: 'enshitujiazumiaozuzizhizhou'
          }, {
            label: '襄阳',
            value: 'xiangyang'
          }]
        }, {
          label: '湖南',
          value: '19',
          cities: [{
            label: '长沙',
            value: 'changsha'
          }, {
            label: '株洲',
            value: 'zhuzhou'
          }, {
            label: '湘潭',
            value: 'xiangtan'
          }, {
            label: '衡阳',
            value: 'hengyang'
          }, {
            label: '邵阳',
            value: 'shaoyang'
          }, {
            label: '岳阳',
            value: 'yueyang'
          }, {
            label: '常德',
            value: 'changde'
          }, {
            label: '张家界',
            value: 'zhangjiajie'
          }, {
            label: '益阳',
            value: 'yiyang'
          }, {
            label: '郴州',
            value: 'chenzhou'
          }, {
            label: '永州',
            value: 'yongzhou'
          }, {
            label: '怀化',
            value: 'huaihua'
          }, {
            label: '娄底',
            value: 'loudi'
          }, {
            label: '湘西土家族苗族自治州',
            value: 'xiangxitujiazumiaozuzizhizhou'
          }]
        }, {
          label: '广东',
          value: '20',
          cities: [{
            label: '广州',
            value: 'guangzhou'
          }, {
            label: '深圳',
            value: 'shenzhen'
          }, {
            label: '韶关',
            value: 'shaoguan'
          }, {
            label: '珠海',
            value: 'zhuhai'
          }, {
            label: '汕头',
            value: 'shantou'
          }, {
            label: '南海区',
            value: 'nanhaiqu'
          }, {
            label: '江门',
            value: 'jiangmen'
          }, {
            label: '湛江',
            value: 'zhanjiang'
          }, {
            label: '茂名',
            value: 'maoming'
          }, {
            label: '肇庆',
            value: 'zhaoqing'
          }, {
            label: '惠州',
            value: 'huizhou'
          }, {
            label: '梅州',
            value: 'meizhou'
          }, {
            label: '汕尾',
            value: 'shanwei'
          }, {
            label: '河源',
            value: 'heyuan'
          }, {
            label: '阳江',
            value: 'yangjiang'
          }, {
            label: '清远',
            value: 'qingyuan'
          }, {
            label: '东莞',
            value: 'dongguan'
          }, {
            label: '中山',
            value: 'zhongshan'
          }, {
            label: '潮州',
            value: 'chaozhou'
          }, {
            label: '揭阳',
            value: 'jieyang'
          }, {
            label: '云浮',
            value: 'yunfu'
          }]
        }, {
          label: '广西',
          value: '21',
          cities: [{
            label: '南宁',
            value: 'nanning'
          }, {
            label: '柳州',
            value: 'liuzhou'
          }, {
            label: '桂林',
            value: 'guilin'
          }, {
            label: '梧州',
            value: 'wuzhou'
          }, {
            label: '北海',
            value: 'beihai'
          }, {
            label: '防城港',
            value: 'fangchenggang'
          }, {
            label: '钦州',
            value: 'qinzhou'
          }, {
            label: '贵港',
            value: 'guigang'
          }, {
            label: '玉林',
            value: 'yulin'
          }, {
            label: '百色',
            value: 'baise'
          }, {
            label: '贺州',
            value: 'hezhou'
          }, {
            label: '河池',
            value: 'hechi'
          }, {
            label: '来宾',
            value: 'laibin'
          }, {
            label: '崇左',
            value: 'chongzuo'
          }]
        }, {
          label: '海南',
          value: '22',
          cities: [{
            label: '海口',
            value: 'haikou'
          }, {
            label: '三亚',
            value: 'sanya'
          }, {
            label: '洋浦市',
            value: 'yangpushi'
          }]
        }, {
          label: '四川',
          value: '23',
          cities: [{
            label: '成都',
            value: 'chengdu'
          }, {
            label: '自贡',
            value: 'zigong'
          }, {
            label: '攀枝花',
            value: 'panzhihua'
          }, {
            label: '泸州',
            value: 'luzhou'
          }, {
            label: '德阳',
            value: 'deyang'
          }, {
            label: '绵阳',
            value: 'mianyang'
          }, {
            label: '广元',
            value: 'guangyuan'
          }, {
            label: '遂宁',
            value: 'suining'
          }, {
            label: '内江',
            value: 'neijiang'
          }, {
            label: '乐山',
            value: 'leshan'
          }, {
            label: '南充',
            value: 'nanchong'
          }, {
            label: '眉山',
            value: 'meishan'
          }, {
            label: '宜宾',
            value: 'yibin'
          }, {
            label: '广安',
            value: 'guangan'
          }, {
            label: '达州',
            value: 'dazhou'
          }, {
            label: '雅安',
            value: 'yaan'
          }, {
            label: '巴中',
            value: 'bazhong'
          }, {
            label: '资阳',
            value: 'ziyang'
          }]
        }, {
          label: '贵州',
          value: '24',
          cities: [{
            label: '贵阳',
            value: 'guiyang'
          }, {
            label: '六盘水',
            value: 'liupanshui'
          }, {
            label: '遵义',
            value: 'zunyi'
          }, {
            label: '安顺',
            value: 'anshun'
          }, {
            label: '铜仁地区',
            value: 'tongrendiqu'
          }, {
            label: '黔西南布依族苗族自治州',
            value: 'qianxinanbuyizumiaozuzizhizhou'
          }, {
            label: '毕节地区',
            value: 'bijiediqu'
          }, {
            label: '黔东南苗族侗族自治州',
            value: 'qiandongnanmiaozudongzuzizhizhou'
          }, {
            label: '黔南布依族苗族自治州',
            value: 'qiannanbuyizumiaozuzizhizhou'
          }]
        }, {
          label: '云南',
          value: '25',
          cities: [{
            label: '昆明',
            value: 'kunming'
          }, {
            label: '曲靖',
            value: 'qujing'
          }, {
            label: '玉溪',
            value: 'yuxi'
          }, {
            label: '保山',
            value: 'baoshan'
          }, {
            label: '昭通',
            value: 'zhaotong'
          }, {
            label: '楚雄彝族自治州',
            value: 'chuxiongyizuzizhizhou'
          }, {
            label: '红河哈尼族彝族自治州',
            value: 'honghehanizuyizuzizhizhou'
          }, {
            label: '文山壮族苗族自治州',
            value: 'wenshanzhuangzumiaozuzizhizhou'
          }, {
            label: '思茅',
            value: 'simao'
          }, {
            label: '西双版纳傣族自治州',
            value: 'xishuangbannadaizuzizhizhou'
          }, {
            label: '德宏傣族景颇族自治州',
            value: 'dehongdaizujingpozuzizhizhou'
          }, {
            label: '大理白族自治州',
            value: 'dalibaizuzizhizhou'
          }, {
            label: '迪庆藏族自治州',
            value: 'diqingzangzuzizhizhou'
          }, {
            label: '临沧',
            value: 'lincang'
          }]
        }, {
          label: '陕西',
          value: '26',
          cities: [{
            label: '西安',
            value: 'xian'
          }, {
            label: '铜川',
            value: 'tongchuan'
          }, {
            label: '宝鸡',
            value: 'baoji'
          }, {
            label: '咸阳',
            value: 'xianyang'
          }, {
            label: '渭南',
            value: 'weinan'
          }, {
            label: '延安',
            value: 'yanan'
          }, {
            label: '汉中',
            value: 'hanzhong'
          }, {
            label: '榆林',
            value: 'yulin2'
          }, {
            label: '安康',
            value: 'ankang'
          }, {
            label: '商洛',
            value: 'shangluo'
          }]
        }, {
          label: '西藏',
          value: '27',
          cities: [{
            label: '拉萨',
            value: 'lasa'
          }, {
            label: '昌都',
            value: 'changdu'
          }, {
            label: '山南',
            value: 'shannan'
          }, {
            label: '日喀则',
            value: 'rikaze'
          }, {
            label: '那曲',
            value: 'naqu'
          }, {
            label: '阿里',
            value: 'ali'
          }, {
            label: '林芝',
            value: 'linzhi'
          }]
        }, {
          label: '甘肃',
          value: '28',
          cities: [{
            label: '兰州',
            value: 'lanzhou'
          }, {
            label: '嘉峪关',
            value: 'jiayuguan'
          }, {
            label: '金昌',
            value: 'jinchang'
          }, {
            label: '白银',
            value: 'baiyin'
          }, {
            label: '天水',
            value: 'tianshui'
          }, {
            label: '武威',
            value: 'wuwei'
          }, {
            label: '张掖',
            value: 'zhangye'
          }, {
            label: '平凉',
            value: 'pingliang'
          }, {
            label: '酒泉',
            value: 'jiuquan'
          }, {
            label: '庆阳',
            value: 'qingyang'
          }, {
            label: '定西',
            value: 'dingxi'
          }, {
            label: '陇南',
            value: 'longnan'
          }, {
            label: '临夏回族自治州',
            value: 'linxiahuizuzizhizhou'
          }, {
            label: '甘南藏族自治州',
            value: 'gannanzangzuzizhizhou'
          }]
        }, {
          label: '青海',
          value: '29',
          cities: [{
            label: '西宁',
            value: 'xining'
          }, {
            label: '海晏',
            value: 'haiyan'
          }, {
            label: '海东',
            value: 'haidong'
          }, {
            label: '海北',
            value: 'haibei'
          }, {
            label: '黄南',
            value: 'huangnan'
          }, {
            label: '海南',
            value: 'hainan'
          }, {
            label: '果洛',
            value: 'guoluo'
          }, {
            label: '玉树',
            value: 'yushu'
          }, {
            label: '海西',
            value: 'haixi'
          }]
        }, {
          label: '宁夏',
          value: '30',
          cities: [{
            label: '银川',
            value: 'yinchuan'
          }, {
            label: '石嘴山',
            value: 'shizuishan'
          }, {
            label: '吴忠',
            value: 'wuzhong'
          }, {
            label: '固原',
            value: 'guyuan'
          }, {
            label: '中卫',
            value: 'zhongwei'
          }]
        }, {
          label: '新疆',
          value: '31',
          cities: [{
            label: '乌鲁木齐',
            value: 'wulumuqi'
          }, {
            label: '石河子',
            value: 'shihezi'
          }, {
            label: '克拉玛依',
            value: 'kelamayi'
          }, {
            label: '吐鲁番',
            value: 'tulufan'
          }, {
            label: '哈密',
            value: 'hami'
          }, {
            label: '昌吉',
            value: 'changji'
          }, {
            label: '博乐',
            value: 'bole'
          }, {
            label: '和田',
            value: 'hetian'
          }, {
            label: '阿克苏',
            value: 'akesu'
          }, {
            label: '阿勒',
            value: 'ale'
          }, {
            label: '喀什',
            value: 'kashi'
          }, {
            label: '塔城',
            value: 'tacheng'
          }, {
            label: '库尔勒',
            value: 'kuerle'
          }, {
            label: '伊犁',
            value: 'yili'
          }, {
            label: '克州',
            value: 'kezhou'
          }]
        }, {
          label: '香港',
          value: '32',
          cities: [{
            label: '香港',
            value: 'xianggang'
          }]
        }, {
          label: '澳门',
          value: '33',
          cities: [{
            label: '澳门',
            value: 'aomen'
          }]
        }, {
          label: '台湾',
          value: '34',
          cities: [{
            label: '台湾',
            value: 'taiwan'
          }, {
            label: '新加坡',
            value: 'xinjiapo'
          }]
        }],
        selectedProvinceIndex: -1,
        selectedCityIndex: -1
      }
    },
    created () {
      this.label = this.passLabel
      this.getIndex()
      if (this.selectedProvinceIndex < 0) {
        this.label = ''
        return
      }
      this.value = this.provinces[this.selectedProvinceIndex].cities[this.selectedCityIndex].value
    },
    methods: {
      changeProvince (index) {
        this.selectedProvinceIndex = index
      },
      changeCity (index) {
        this.selectedCityIndex = index
        this.label = this.provinces[this.selectedProvinceIndex].cities[this.selectedCityIndex].label
        this.value = this.provinces[this.selectedProvinceIndex].cities[this.selectedCityIndex].value
        this.$emit('changeCity', this.label)
        this.isShowOptions = false
      },
      getIndex () {
        if (this.helperIndex === -1) {
          this.selectedProvinceIndex = -1
          this.selectedCityIndex = -1
        } else {
          this.selectedProvinceIndex = parseInt(this.helperIndex.split('-')[0])
          this.selectedCityIndex = parseInt(this.helperIndex.split('-')[1])
        }
      },
      toggleShowOptions () {
        this.isShowOptions = !this.isShowOptions
        if (this.isShowOptions) {
          this.getIndex()
          this.$nextTick(() => {
            this.$refs.provinces.scrollTop = this.selectedProvinceIndex * provinceLiHeight
          })
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.drop-enter-active,
.drop-leave-active {
  transition: all .3s;
}

.drop-enter,
.drop-leave-active {
  height: 0;
  transform: rotate3d(1, 0, 0, 90deg);
  opacity: 0;
}

.selector {
  display: inline-block;
}

.wrapper {
  position: relative;
  height: 46px;
  border: 1px solid #f1f3f9;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  &.normal {
    width: 396px;
  }
  &.small {
    width: 188px;
  }
  &.extraSmall {
    width: 90px;
  }
  input {
    width: 80%;
    height: 44px;
    padding-left: 17px;
    border: 0;
    outline: none;
    text-align: left;
    background-color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }
  .icon_triangle {
    position: absolute;
    right: 18px;
    top: 20px;
    border: 6px solid #fff;
    border-color: #d3d3d3 transparent transparent;
    display: block;
    font-size: 0;
    height: 0;
    width: 0;
    transition: transform .3s;
    &.active {
      transform: translateY(-50%) rotate(180deg);
      transform-origin: center center;
    }
  }
  .options {
    position: absolute;
    top: 47px;
    left: -1px;
    z-index: 2;
    width: 100%;
    height: 136px;
    background-color: #fff;
    border: 1px solid #e7e7e7;
    box-shadow: 2px 2px 4px #efefe4;
    border-radius: 3px;
    .provinces {
      width: 90px;
      height: 136px;
      overflow: auto;
      border-right: 1px solid #ececec;
      li {
        height: 34px;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        &:hover {
          background-color: #f4f4f4;
        }
        &.active {
          color: #fff;
          background-color: #4ed6b7;
        }
      }
    }
    .cities {
      position: absolute;
      top: 0;
      left: 91px;
      right: 0;
      height: 126px;
      padding: 5px;
      overflow: auto;
      color: #555;
      li {
        float: left;
        height: 24px;
        margin: 4px 2px;
        padding: 0 8px;
        line-height: 24px;
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        &:hover {
          background-color: #f4f4f4;
        }
        &.active {
          color: #fff;
          background-color: #4ed6b7;
        }
      }
    }
  }
}
</style>
