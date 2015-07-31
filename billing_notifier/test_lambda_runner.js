
var i = require('./index_notifier');
var event = { "Records": [ { "EventSource": "aws:sns", "EventVersion": "1.0", "EventSubscriptionArn": "arn:aws:sns:us-east-1:290093585298:IncreasedPercentagesSimTopic:8159ee60-84e6-438a-be32-136f8361c0fc", "Sns": { "Type": "Notification", "MessageId": "598410f7-230a-5e95-a475-5ec2f9357673", "TopicArn": "arn:aws:sns:us-east-1:290093585298:IncreasedPercentagesSimTopic", "Subject": "ALARM: \"IncreasedPercentagesSimAlarm\" in US - N. Virginia", "Message": "{\"AlarmName\":\"IncreasedPercentagesSimAlarm\",\"AlarmDescription\":null,\"AWSAccountId\":\"290093585298\",\"NewStateValue\":\"ALARM\",\"NewStateReason\":\"Threshold Crossed: 1 datapoint (29149.0) was greater than the threshold (0.0).\",\"StateChangeTime\":\"2015-07-31T20:18:07.385+0000\",\"Region\":\"US - N. Virginia\",\"OldStateValue\":\"INSUFFICIENT_DATA\",\"Trigger\":{\"MetricName\":\"EstimatedCharges\",\"Namespace\":\"CTOBilling\",\"Statistic\":\"MAXIMUM\",\"Unit\":\"None\",\"Dimensions\":[{\"name\":\"Currency\",\"value\":\"USD\"}],\"Period\":60,\"EvaluationPeriods\":1,\"ComparisonOperator\":\"GreaterThanThreshold\",\"Threshold\":0.0}}", "Timestamp": "2015-07-31T20:18:07.515Z", "SignatureVersion": "1", "Signature": "zkNXuSsbOLqir3Khiw2e/5Fmy8x59IpBHQba4Q77nCbWg21NVFvLjV0TgSvhuk0AiFEQsqD/larWtn/PyOCJBT+kyXl6UsilX30/EYNqfREzF8ZqbfUoG+2TEOu2HwHTnIUDkLVfBUZjFzJ8tUI43wieE/RaeZBZUKhrfIP/q0rpPIf99GyA5tAtxFOdF4jboc56c9w1POh+RA8GdlMd9/H3Rh4CwoRc0jeaEQsf4aHBuKnLlJphQ2Qx3q0GVE/nv9c+QQty0A8v4YkOdpMv9g6aV+LHUDCM865c3iGsU251SNcgB18zTLIBjsJtEWxndAGJAGnPMwYmV5x1DJbDcg==", "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-d6d679a1d18e95c2f9ffcf11f4f9e198.pem", "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:290093585298:IncreasedPercentagesSimTopic:8159ee60-84e6-438a-be32-136f8361c0fc", "MessageAttributes": {} } } ] }
var context = {fail:function(a){console.log(a)}, done:function(e, a){console.log(a)}};
i.handler(event, context);
