<?php
header("Content-Type: text/plain;charset=utf-8"); 

echo '{
    "form": [
        {
            "type": "请假",
            "href": "index/task.html"
        },
        {
            "type": "费用",
            "href": "index/cost.html"
        },
        {
            "type": "出差",
            "href": "index/go_out.html"
        },
        {
            "type": "采购",
            "href": "index/shopping.html"
        }

    ]
}';
?>