var Config =
{
    "login": {
        "username": "admin",
        "password": "admin"
    },
    "auth": {
        "access-token": "IGQVJWOGNVcU5KQTZAqODlVRW1BekVXLXd1V3A0cnJreUxJYUtlV0lJNUlBZAmM1UzlrOHZADek51ZAXdRbVkybFRuZA2V3dzFHUGVkOU5zWjBlYVhRTXU5WWtVS2lrQkMtWGtONUpObXlKdUhtaGZA4U1BhS1BjY29xaEZAac0lV"
    },
    "api": 
    {
        "mock": false,
        "endpoints": 
        [
            {
                "name": "Get Posts",
                "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
            },
            {
                "name": "Get Post Details",
                "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
            }
        ]
    }
};
export default Config;