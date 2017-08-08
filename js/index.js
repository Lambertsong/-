/**
 * Created by Administrator on 2017/7/31.
 */
$(function () {
//    顶部的鼠标移入颜色变化 1发生的目标元素 2什么事件 mouseover mouseout 3改变链接颜色
    //头部字体特效
    $('.top a').mouseover(function () {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094');
    })
    //购物车特效
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#FF6700', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: '#424242'});
        $('.goods').stop(true, false).slideUp();
    })
    //表单输入框移入特效效果
    $('.ser1').mouseover(function () {
        $('.ser1 input').css('border', '1px solid #000');
        $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none');
    }).mouseout(function () {
        $('.ser1 input').css('border', '1px solid #ccc');
        $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
    })
    //热门搜索的移入效果
    $('.hot a').mouseover(function () {
        $(this).css({color: '#fff', background: 'orange'})
    }).mouseout(function () {
        $(this).css({color: '#757575',background: '#eee'})
    })
    //按钮移入后的效果
    var flag = true;
    $('.ser2').mouseover(function () {
        if(flag){
        $('.ser2 input').css({'border': '1px solid #000', ' border-right': 'none'})
        $(this).css({'color': '#fff', 'background': 'orange', 'border': 'none'})
        }
    }).mouseout(function () {
        if(flag){
        $('.ser1 input').css('border','1px solid #ccc');
            $(this).css({'background':'#fff', 'color': '#000', 'border':'1px solid #ccc', 'border':'none'})
        }
    })
    //表单获取焦点的时候
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
//    导航效果
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color','#ff6700');
        if($(this).index()<7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').slideDown();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color','#000')
        $('.select').slideUp();
    })
    $('.nav').mouseout(function () {
        $('select').slideUp().finish();

    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish()//停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp();
    })
//轮播图效果
    var num = 0;
    var timer;
    timer = setInterval(autoplay,1000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 1000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        (num < 0)?num = 4:null

        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        (num > 4)?num = 0:null
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        (num > 4)?num = 0:null
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background','transparent');
    })
    /*鼠标移除二级导航的范围后，让它消失*/
    $('.anvL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })
    //小米新品
        $('.content div').mouseover(function () {
            $(this).css('color','#fff')
        }).mouseout(function () {
            $(this).css('color','#bbb')
        })
    //小米明星产品
    var timerM;
    timerM = setInterval(cartoon,1000);
    function cartoon() {
        if($('.control').css('left')=='0px'){
            $('.control').css('left','-1226px')
            $('.next').css('color','#000').siblings('.prev').css('color','#eee')
        }else{
            $('.control').css('left','0px')
            $('.prev').css('color','#000').siblings('.next').css('color','#eee')
        }
    }
    $('.prev').click(function () {
        clearInterval(timerM);
        $('.control').css('left','-1226px')
        $('.next').css('color','#000').siblings('.prev').css('color','#eee')
    })
    $('.next').click(function () {
        clearInterval(timerM);
        $('.control').css('left','0px')
        $('.prev').css('color','#000').siblings('.next').css('color','#eee')
    })
    $('.bezel').add('.p').mouseover(function(){
        clearInterval(timerM);
    }).mouseout(function() {
        timerM = setInterval(cartoon,1000)
    });
    //智能硬件开始
    $('.toAll').mouseover(function () {
        $('.toAll a ,i').css('color','orange')
    }).mouseout(function () {
        $('.toAll a ,i').css('color','#888')
    })
     append('.productLeft img')
     append('.productRight li')
    function append(obj6) {
    $(obj6).mouseover(function () {
        $(this).css({'box-shadow':'rgb(170,170,170) 0px 0px 28px', 'margin-top': '8px'
        }).mouseout(function () {
            $(this).css({'box-shadow':'none', 'margin-top': '12px'})
        })})
    }
  //搭配 周边 配件效果开始
    style('.list41 li','.productR2');  //搭配
    style('.list42 li','.productR3');  //配件
    style('.list5 li','.productR4');   //周边
 //搭配 配件 周边公用样式
    function style(obj0 ,obj1){
        $(obj0).mouseover(function () {
            $(this).css({'color':'orange', 'border-bottom' : '2px solid orange'})
            $(obj1).find('.ProLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
        }).mouseout(function () {
            $(this).css({'color':'#000', 'border-bottom':'none'})
        })
    }
    $('.productL img').mouseover(function () {
        $(this).css({'box-shadow':'rgb(170,170,170) 0px 0px 28px', 'margin-top': '-4px'
        }).mouseout(function () {
            $(this).css({'box-shadow':'none', 'margin-top': '0px'
            })})
    })
    $('.ProLi > li').mouseover(function () {
        ($(this).index() != 7)? $(this).css({'box-shadow':'rgb(170,170,170) 0px 0px 28px', 'margin-top': '10px'}).find('.slideDiv').stop(true,false).slideDown().removeClass('hide'):null
    }).mouseout(function () {
        ($(this).index() != 7)? $(this).css({'box-shadow':'none', 'margin-top': '14px'}).find('.slideDiv').stop(true,false).slideUp().addClass('hide'):null
    })
    $('.twoRow li').mouseover(function () {
        $(this).css({'box-shadow':'rgb(170,170,170) 0px 0px 28px', 'margin-top': '1px'})
    }).mouseout(function () {
        $(this).css({'box-shadow':'none', 'margin-top': '0px'})
    })
    //为你推荐
    $(function() {
        var num = 0;
        var step = null;
        var lNum = 0;
        $('.prev2').click(function() {
            ++num;
            if(num < 4) {
                step = -(num * 1220);
                $('.scroll2').css('left', step + 'px');
                lNum = num;
            } else{num = 3;}
        });
        $('.next2').click(function() {
            --num;
            (num >= 0)?$('.scroll2').css('left',step+(1220*(lNum-num)) + 'px'):num = 0;
        })
    });
    $('.shift .scroll2 li').mouseover(function () {
        $(this).find('img').css('margin-top', '47px')
    }).mouseout(function () {
        $(this).find('img').css('margin-top','50px')
    })
 //  热评产品
    $('.hotList li').mouseover(function () {
        $(this).css({'box-shadow':'rgb(170,170,170) 0px 0px 28px', 'margin-top': '17px'
        }).mouseout(function () {$(this).css({'box-shadow':'none', 'margin-top': '19px'})})})
//    内容开始
    var num2=[0,0,0,0];
    var index=0;
    $('.contList>li').mouseover(function(){
        index=$(this).index();
        $(this).find('.p2').css('opacity','1');
    }).mouseout(function(){
        $(this).find('.p2').css('opacity','0');
    });
    $('.contList > li .p2').mouseover(function(){
        $(this).css('background','#757575');
    }).mouseout(function(){
        $(this).css('background','#b0b0b0');
    });
    $('.contList > li .l2').mouseover(function(){
        (num2[index]>0)? $(this).css('cursor','pointer'):$(this).css('cursor','default');
    }).click(function(){
        num2[index] > 0 ? (num2.splice(index,1,num2[index]-1), page('.contBox','.round2')):null//调用函数page
    });
    $('.contList > li .r2').mouseover(function(){
        (num2[index]<3) ? $(this).css('cursor','pointer'):$(this).css('cursor','default');
    }).click(function(){
        (num2[index] < 3)?(num2.splice(index,1,num2[index]+1), page('.contBox','.round2')):null//调用函数page
    });
    //公用样式
    function page(obj2 ,obj3) {
        $(obj2).eq(index).find('li').eq(num2[index]).show().siblings().hide();
        $(obj3).eq(index).find('p').eq(num2[index]).css({border:'2px solid #ff6700', background:'#fff'}).siblings().css({border:'2px solid #fff', background:'#b0b0b0'});
    }
    //点击圆圈动
    $('.round2 p').click(function () {
        num2[index]=$(this).index();
        $(this).css({border: '2px solid #ff6700', background: '#fff'}).siblings().css({border: '2px solid #fff', background: '#b0b0b0'});
        $('.contBox').eq(index).find('li').eq($(this).index()).show().siblings().hide();
    }).mouseover(function () {
        ( num2[index]!=$(this).index())?$(this).css('background','orange'):null
    }).mouseout(function () {
       num2[index]!=$(this).index()?$(this).css('background','#b0b0b0'):null
    })
//最后一张特效
    $('.goTo').mouseover(function(){
        $(this).css({'background':$(this).css('color'),'color':'#fff'});
    }).mouseout(function(){
        $(this).css({'color':$(this).parent().css('color'),'background':'#fff' });
    });
//    视频开始
    $('.videoList li').mouseover(function () {
        $(this).css({'box-shadow':'rgb(170,170,170) 0px 0px 28px', 'margin-top': '11px'}).find('div').css('color','orange')
    }).mouseout(function () {
        $(this).css({'box-shadow':'none', 'margin-top': '14px'}).find('div').css('color','#fff')
    })
//底部特效
    change('.nav1 li a' );//函数调用 颜色切换
    change('.nav2 li a' );//函数调用 颜色切换
    change('.staTxt a ' );//函数调用 颜色切换
    function change(obj4) {
        $(obj4).mouseover(function () {$(this).css('color','orange')}).mouseout(function () {$(this).css('color','#333')})//公用函数
    }
    $('#serv ').mouseover(function () {
        $(this).css( {'background':'orange', 'color':'#fff'})
    }).mouseout(function () {
        $(this).css( {'background':'#fff', 'color':'#333'})
    })
//    底部特效结束
})








