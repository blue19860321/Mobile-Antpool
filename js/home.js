
$(document).ready(function(){
       $("#mm-menu-toggle").click(function(event) {
            $("#mm-menu-mask").toggleClass('actives');
            $(".horizen").toggleClass("fixed"); 
       });  

       $("#user-ul li").click(function(event) {
          var user= $(event.target).html();
           $("#user-child").html(user);
       });

      $("#miner-ul li").click(function(event) {
          var miner= $(event.target).html();
           $("#miner-child").html(miner);       
       });

      $("#order-ul li").click(function(event) {
          var order= $(event.target).html();
           $("#order-child").html(order);       
       });

     $("#pay-ul li").click(function(event) {
          $("#pps_table").hide();
          $("#pplns_table").hide();
          $("#p2p_table").hide();
          $("#solo_table").hide();
          $("#payment_table").hide();
          var pay= $(event.target).html();
          var id= $(event.target).parent().attr("id")   /**获取被点击li的ID*/ 
          $("#pay-child").html(pay);      
          $("#"+id+"_table").show();
     });
});

 