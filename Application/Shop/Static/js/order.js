define(function (require,exports,module) {
    module.exports = {
        cancel: function (id) {
            if(confirm('您确定要取消订单？')){
                $.post('/index.php?s=shop/index/cancel_order',{id:id}, function (ret) {
                    //ret = JSON.parse(ret);
                    if(ret.status==1){
                        window.location.reload()
                    }
                })
            }
        },
        pay: function (id) {
            window.location.replace('/index.php/shop/index/jsApiPay/order_id/'+id)
        },
        accept: function (id) {
            if(confirm('您确定要确认收货吗？')){
                $.post('/index.php?s=shop/index/do_receipt',{id:id}, function (ret) {
                    //ret = JSON.parse(ret);
                    if(ret.status==1){
                        window.location.reload()
                    }
                })
            }
        },
        comment: function (id) {
            window.location.href = '/index.php?s=shop/index/comment/id/'+id
        }
    };
});