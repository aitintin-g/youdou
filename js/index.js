$(function(){
	//使用ajax获取数组实现动态添加连载、新等标签
    //array[][]使用二维数组
    // for(var n=0;n<3;n++){
    // 	//var arraylength=array[n].length();
    // 	for(var m=0;m<1;m++){//m<arraylength
    // 	var mindex=3;//array[n][m]
    // 	var _this=$('aside ul').eq(n).children().eq(mindex);
    // 	_this.html(_this.text()+'<p>(连载)</p>');
    // }
    // }


	$('#login').click(function(){
		alert('暂不支持');
	});
	$('#register').click(function(){
		alert('暂不支持');
	});

	

	//连续剧
	$('.series li').click(function(){
		var season_num=$(this).attr('season_num');
    var pindex=$(this).index()+1;
		//alert(season_num)
		var html='';
		var text=['第一季','第二季','第三季','第四季','第五季','第六季','第七季','第八季','第九季','第十季'];
		if(season_num){
      for(var i=0;i<season_num;i++){
            html+="<li>"+text[i]+"</li>\r";
            if(i<5){
              $('.season').eq(0).html(html).show();
              $('.season').eq(1).hide();
            }else if(i==5){
                $('.season').eq(0).html(html).show();
                $('.season').eq(1).hide();
                html='';
            }else{
              $('.season').eq(1).html(html).show();
            }
          }
    }
		//alert(html);
		//$('.season_new p').html(text[i]+':').show();

	//使用ajax从服务器获取集数
    $.get("../get_num.php",{id:pindex},function(data){
        //alert(data);
        var episode_num=data;
        //var episode_num=26;
    var ehtml='<p></p>\r<ul>\r';
    var k;
    for(var j=0;j<episode_num;j++){
           k=j+1;
           ehtml+='<li>'+k+'</li>\r';
          if(k!=episode_num){
             if(k%10==0){
           ehtml+='</ul>\r<ul>\r';
           }
       }else{
        ehtml+='</ul>'
       }
    }
    //alert(ehtml);
    $('.season_new').html(ehtml).show();
    $('.season_new p').html(text[i]+':').show();

    //选集界面
     $('.season_new li').click(function(){
    //使用ajax从服务器获取链接数组
      var xindex=$(this).index();
      var yindex=$(this).parent().index();
      //alert(pindex);
      //alert(nindex);
      cindex=(yindex-1)*10+xindex;
      //alert(cindex);
      $.get("../episode_src.php",{id:pindex,user:cindex},function(data){
        var src=data;
        $('iframe').attr('src',src);
      });
      
     });
      
   });
    //获取季的链接
		$('.season li').click(function(){
    //使用ajax从服务器获取链接数组

    	var nindex=$(this).index();
      
    	//alert(nindex);
       $.get("../get_episode.php",{id:pindex,user:nindex},function(data){
        //alert(data);
        var src=data;
        $('iframe').attr('src',src);
       });
    });  
    	
    
	});

  //动漫
  $('.animation li').click(function(){
    var season_num=$(this).attr('season_num');
    var pindex=$(this).index()+1;
    //alert(season_num)
    var html='';
    var text=['第一季','第二季','第三季','第四季','第五季','第六季','第七季','第八季','第九季','第十季'];
    if(season_num){
      for(var i=0;i<season_num;i++){
            html+="<li>"+text[i]+"</li>\r";
            if(i<5){
              $('.season').eq(0).html(html).show();
              $('.season').eq(1).hide();
            }else if(i==5){
                $('.season').eq(0).html(html).show();
                $('.season').eq(1).hide();
                html='';
            }else{
              $('.season').eq(1).html(html).show();
            }
          }
    }
    //alert(html);
    //$('.season_new p').html(text[i]+':').show();

  //使用ajax从服务器获取集数
    $.get("../get_number.php",{id:pindex},function(data){
        //alert(data);
        var animation_num=data;
        //var episode_num=26;
    var ehtml='<p></p>\r<ul>\r';
    var k;
    for(var j=0;j<animation_num;j++){
           k=j+1;
           ehtml+='<li>'+k+'</li>\r';
          if(k!=animation_num){
             if(k%10==0){
           ehtml+='</ul>\r<ul>\r';
           }
       }else{
        ehtml+='</ul>'
       }
    }
    //alert(ehtml);
    $('.season_new').html(ehtml).show();
    $('.season_new p').html(text[i]+':').show();

    //选集界面
    //  $('.season_new li').click(function(){
    // //使用ajax从服务器获取链接数组
    //   var nindex=$(this).index();
    //   var pindex=$(this).parent().index();
    //   //alert(pindex);
    //   //alert(nindex);
    //     cindex=(pindex-1)*10+nindex;
    //     //alert(cindex);
    //   var src=array[cindex];
    //   $('iframe').attr('src',src);
    // });

    $('.season_new li').click(function(){
    //使用ajax从服务器获取链接数组
      var xindex=$(this).index();
      var yindex=$(this).parent().index();
      //alert(pindex);
      //alert(nindex);
      cindex=(yindex-1)*10+xindex;
      //alert(cindex);
      $.get("../animation_src.php",{id:pindex,user:cindex},function(data){
        var src=data;
        $('iframe').attr('src',src);
      });
      
     });

    });

    

    
    $('.season li').click(function(){
    //使用ajax从服务器获取链接数组

      var nindex=$(this).index();
      
      //alert(nindex);
       $.get("../get_animation.php",{id:pindex,user:nindex},function(data){
      //alert(data);
      var src=data;
      $('iframe').attr('src',src);
       });  
    });

    

  });

    //经典
  $('.recommend li').click(function(){
    var isrc;
    var nindex=$(this).index();
    //alert(nindex);
    switch(nindex){
      case 0:
      isrc="http://pan.baidu.com/s/1mi7OD8O";
      break;
      case 1:
      isrc="http://pan.baidu.com/s/1o8gTY10";
      break;
      case 2:
      isrc="http://pan.baidu.com/s/1dDgYgiH";
      break;
      case 3:
      isrc="http://pan.baidu.com/s/1i4ByzNB";
      break;
      case 4:
      isrc="http://pan.baidu.com/s/1i58rhT7";
      break;
    }
    //alert(isrc);
    $('iframe').attr('src',isrc);
  });
    
    //电影
    $('.movie li').click(function(){
    	$('.season').eq(0).hide();
        $('.season').eq(1).hide();
    //使用ajax从服务器获取集数
    var pindex=$(this).index()+1;
    $.get("../get_movie.php",{id:pindex},function(data){
        //alert(data);
        var animation_num=data;
        //var episode_num=26;
    var ehtml='<p></p>\r<ul>\r';
    var k;
    for(var j=0;j<animation_num;j++){
           k=j+1;
           ehtml+='<li>'+k+'</li>\r';
          if(k!=animation_num){
             if(k%10==0){
           ehtml+='</ul>\r<ul>\r';
           }
       }else{
        ehtml+='</ul>'
       }
    }
    //alert(ehtml);
    $('.season_new').html(ehtml).show();
    $('.season_new p').hide();

    

    $('.season_new li').click(function(){
    //使用ajax从服务器获取链接数组
      var xindex=$(this).index();
      var yindex=$(this).parent().index();
      //alert(pindex);
      //alert(nindex);
      cindex=(yindex-1)*10+xindex;
      //alert(cindex);
      $.get("../movie_src.php",{id:pindex,user:cindex},function(data){
        var src=data;
        $('iframe').attr('src',src);
      });
      
     });

    });
  //   //使用ajax从服务器获取集数
		// var episode_num=26;
		// var ehtml='<p></p>\r<ul>\r';
		// var k;
		// for(var j=0;j<episode_num;j++){
  //          k=j+1;
  //          ehtml+='<li>'+k+'<li>\r';
  //         if(k!=episode_num){
  //         	 if(k%10==0){
  //          ehtml+='</ul>\r<ul>\r';
  //          }
  //      }else{
  //      	ehtml+='</ul>'
  //      }
		// }
		// //alert(ehtml);
		// $('.season_new').html(ehtml).show();
		// $('.season_new p').hide();
    });
    //推荐网站、天天精彩
    $('.recommend,.recommend_web').click(function(){
    	$('.season').eq(0).hide();
        $('.season').eq(1).hide();
        $('.season_new').hide();
    });

    //定位
    $('aside ul li').click(function(){
    	$('aside ul li').removeClass('click');
    	$(this).addClass('click');
    });

    //选集界面
    // $('.select ul li').click(function(){
    // 	//使用ajax从服务器获取链接数组
    // 	alert('123');
    // 	var nindex=$(this).index();
    // 	var src=array[nindex];
    // 	$('iframe').attr('src',src);

    // });

    // $('.season_new li').click(function(){
    //     //使用ajax从服务器获取链接数组
    // 	var nindex=$(this).index();
    // 	alert('123');
    // 	var src=array[nindex];
    // 	$('iframe').attr('src',src);
    // })

});