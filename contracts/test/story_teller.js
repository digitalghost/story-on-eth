var StoryTeller = artifacts.require("StoryTeller");

contract('StoryTeller', function(accounts) {
  var st;

  it("should asset submit a content", function() {

    var _transferFee = web3.toWei('1', 'ether');//web3.utils.toWei('1', 'ether');
    var brief = "测试标题";
    var content = "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容";

    return StoryTeller.deployed().then(function(inst){
      //console.log(web3);
      st = inst;
      //console.log(st.address);
      return st.tellStory(brief,content,{from:accounts[0],value:_transferFee});
    }).then(function(res){
      for (var i = 0; i < res.logs.length; i++) {
        var log = res.logs[i];
        if (log.event == "StoryTold") {
          //console.log(log.args);
          assert.equal(log.args.brief,brief,"Always");
          break;
        }
      } 
    })
    
  });

  it("should asset story count and story ids first", function() {

    return StoryTeller.deployed().then(function(inst){
      //console.log(web3);
      st = inst;
      return st.countStories.call();
    }).then(function(res){
      //console.log(res.toNumber());
      assert.equal(res.toNumber(),1,"Always");
      return st.getStoryIds.call();
    }).then(function(res){
      //console.log(res);
      assert.equal(res[0].toNumber(),0,"Always");
    })
    
  });

  it("should asset submit a content", function() {

    var _transferFee = web3.toWei('1', 'ether');//web3.utils.toWei('1', 'ether');
    var brief = "2001 年";
    var content = "2001 年2001 年，东北一家国有疫苗公司悄无声息进行改制。多年后再回首，人们才明白其中意义。 那年的 9 月 18 日，上市公司长春高新旗下的长生生物迎来了两位新的股东——韩刚君和杜伟民。 韩刚君用 1932 万元买下了长生生物 30% 的股权，成为第二大股东；他和杜伟民的合资公司则成为了长生的小股东。 杜伟民是长生生物的销售总监。 这笔交易几乎没人注意到。长生生物被放到聚光灯下，是在两年后了。 2003 年末，长春高新和长生生物的掌门人高俊芳把 2000 万打进公司账户，要将长生生物私有化。 算下来，高俊芳的出价是每股 2.4 元；而当时多位竞标者表示，他们愿意出 3 元 / 股的价格。 高俊芳很感谢他们的出价，然后拒绝了他们。 这引起了漫天质疑，有人把低价贱卖国有资产的举报信寄到了市政府。但仍然没有阻挡高俊芳成为长生生物第三大股东。 终于，高俊芳、韩刚君和杜伟民走到一起，他们手中握着长生生物的大半股份。 2007 年，韩刚君把自己的股份卖给了高俊芳，帮助后者成为长生生物的绝对控制人。 十年后再回首，他们手中已经掌握了中国疫苗的半壁江山——最大的乙肝疫苗企业、最大的流感疫苗企业、第二大水痘疫苗企业、第二和第四大狂犬病疫苗企业 …… 他们生产的疫苗，每天都源源不断，注入你和你孩子的身体中。 就在高俊芳顶着资本市场的唾骂，完成长生生物私有化的时候，韩刚君与杜伟民已经南下，他们盯上了刚刚拿到狂犬病疫苗生产资质的常州延申生物。 很快，韩刚君与杜伟民以 2000 万元拿下了常州延申 90% 的股份，将其改组成为江苏延申，韩刚君担任董事长。 杜伟民在加拿大远程完成了这一切。他这时已经拿到了加拿大绿卡，只要再待几年，他就能成为中国人民老朋友白求恩大夫的老乡。 之后不到三年的时间里，韩刚君为江苏延申拿到了流感疫苗、气管炎疫苗、疖病疫苗的生产批文。江苏延申很快成为中国最大的流感疫苗供应商和第四大狂犬病疫苗公司。 2007 年 10 月，韩刚君和杜伟民已经准备好了上市资料。如果不是一次偶然的发现，江苏延申将会登陆资本市场。 2009 年 3 月，大连金港迪安狂犬疫苗在抽检中被发现造假，食药监总局马上对狂犬疫苗生产企业进行突击检查，江苏延申被查出五批产品涉嫌造假。 食药监局发现，延申偷工减料、弄虚作假、逃避监管，疫苗抗原含量低于国家标准，达不到药效。 北大医学部的专家将注射失效的疫苗总结为两个字——杀人。 但这时，江苏延申的 18 万份疫苗已经流入 21 个省 107 个疾控中心，全部被注射进了病人体中。 江苏延申表示，我们无能为力。 没有召回、没有补偿。案件发生后，江苏延申因为生产、销售伪劣产品罪，被判处罚金三百万元，总经理和五名员工被判刑。 董事长韩刚君和另一位大股东却毫发无伤。 更诡异的是，江苏延申很快东山再起，仅仅半年之后，就获得了防疫部门 160 万人份甲流订单，价格超过亿元；不久又获得了甲流疫苗生产牌照。 就在调查组的眼皮子底下，杜伟民把这个生产假疫苗企业的股份全部转让出去，套现两亿元，顺利退出延申。 杜伟民的眼前是一片星辰大海。 根据一篇人物报道，2007 年，杜伟民毅然变卖了加拿大的家产，放弃了入籍，带着妻儿回国了，重新投身疫苗领域。 我熟悉这个行业，清楚中国的生物产业是要发展的。而且我在国外越来越觉得，让疫苗技术掌握在中国人自己的手上，关系到国家的生物安全 。 中国真是一片化腐朽为神奇的土地。在海外迷失了自己，回国就对了。 不过，杜先生没有放弃加拿大绿卡和香港身份证。 2008 年开始，杜伟民悄无声息地在产权交易所吃下了深圳老国企康泰生物的大部分股份，控制了这家中国最大的乙肝疫苗生产商。 深圳康泰的乙肝疫苗技术，来自于美国人的人道主义援助。1989 年 9 月，美国默克公司以微不足道的 700 万美元向中国转让了全套工艺技术。 杜伟民把当年重组江苏延申的手法用在了康泰生物的重组上，开始为上市铺路。 疫苗企业上市，最大的障碍是产品种类单一，康泰多年来上市无功而返，就是因为只有乙肝疫苗这一种产品。 很快，杜先生通过收购北京民海生物，让康泰的产品多样化。2012 年底到 2013 年，康泰自主研发的三款疫苗—— Hib 疫苗、麻风疫苗、四联疫苗获准生产，先后上市。 民海生物是怎么在短时间内获得三款产品的生产许可？ 北京高级法院的一则审判书显示，2010 年到 2014 年间，国家食品药品监督管理局药品审议中心副主任尹红章收受杜伟民 47 万元，为民海生物的药品申报审批事宜提供帮助。 除了加快新疫苗上市，杜伟民也让康泰的主打产品乙肝疫苗获得了新生。 当年杜伟民还在长生生物做销售时，中国的疫苗市场基本被国有七大生物制品公司瓜分，互不侵犯。杜伟民瞅准时机，用拉低价格的方式抢占山头。 他在康泰复制了这一手段，在政府的招标中，康泰用低价摆平了一切竞争者。 乙肝疫苗单人份的出厂价格本来在 15 元左右，康泰直接报价 6.9 元，迅速拿下了国家免疫规划疫苗项目的大笔订单。对于竞标的研究所来说，这比它们的成本价还低，毕竟国家规定的出厂价都需要 9.3 元。 2013 年 12 月，康泰和杜伟民迎来了最大危机。在十天时间里，共有 8 名新生儿在接种康泰的乙肝疫苗后死亡。 一个月后，食药总局和卫计委的调查显示，所有的婴儿死亡为偶合性死亡，疫苗质量没有问题，向康泰生物归还了生产证书。 风波过后，康泰安然上市，市值从杜伟民收购时的 6 亿元飙升到现在的 400 亿元。 高俊芳、韩刚君与杜伟民三位疫苗之王，有太多共同点。 他们对疫苗企业的控制和改造路径相似。瞄准的都是老牌疫苗企业，长生生物、延申生物和深圳康泰，背后都是中国国有的生物制剂研究所。 他们以非常低廉的价格迅速入手，实现完全控股，然后在短时间内拿到多个疫苗生产牌照，为将来上市铺路。 最重要的一点，这些企业所属的有关部门似乎完全没有意识到疫苗生产牌照的价值——疫苗的毛利普遍在 80% 以上。 高俊芳买下长生生物时，企业估值为 1.2 亿元，2015 年借壳上市时，市值为 55 亿元； 2008 年杜伟民吃进深圳康泰时，企业估值为 6 亿元，2016 年上市首日，市值达到 138 亿元； 江苏延申没能上市，"
    return StoryTeller.deployed().then(function(inst){
      //console.log(web3);
      st = inst;
      //console.log(st.address);
      return st.tellStory(brief,content,{from:accounts[0],value:_transferFee});
    }).then(function(res){
      for (var i = 0; i < res.logs.length; i++) {
        var log = res.logs[i];
        if (log.event == "StoryTold") {
          //console.log(log.args);
          assert.equal(log.args.brief,brief,"Always");
          break;
        }
      } 
    });
  });

  it("should asset story count and story ids second", function() {

    return StoryTeller.deployed().then(function(inst){
      //console.log(web3);
      st = inst;
      return st.countStories.call();
    }).then(function(res){
      //console.log(res.toNumber());
      assert.equal(res.toNumber(),2,"Always");
      return st.getStoryIds.call();
    }).then(function(res){
      //console.log(res);
      assert.equal(res[1].toNumber(),1,"Always");
    })
    
  });
  
  it("should asset story brief by story id=1", function() {

    return StoryTeller.deployed().then(function(inst){
      //console.log(web3);
      st = inst;
      return st.countStories.call();
    }).then(function(res){
      //console.log(res.toNumber());
      assert.equal(res.toNumber(),2,"Always");
      return st.getStoryIds.call();
    }).then(function(res){
      //console.log(res);
      assert.equal(res[1].toNumber(),1,"Always");
      return st.getStory.call(res[1].toNumber());
    }).then(function(res){
      //console.log(res);
      assert.equal(res[3],"2001 年","Always");
    })
    
  });

});
