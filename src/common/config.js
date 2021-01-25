var Config =
{
    "login": {
        "username": "admin",
        "password": "admin"
    },
    "auth": {
        "access-token": "IGQVJYOGNpdFJYbEpYUzRwdTdDbzVBNWVjTzlRQWExOVNaRUpOcEU4VWM2T1RFb0VmSFdkY0FBdW00LWItZAEdyUmRmbGY1bWVMRGV2TUtUdGR5ZAFk2SlQweWN4ZAXJXM2N0U2xZATXZANZAmVCWGt2S0hGSHJvUF9yWndoRjFV"
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