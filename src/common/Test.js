/*************************************************************************************************
 *  THIS TEST FILE HAS MOCK JSON RESPONSE FROM BOTH THE API'S AND IS TO BE USED ONLY FOR TESTING
 * ***********************************************************************************************/
var posts = {
    "data": [
        {
            "id": "17881831846692544",
            "caption": "Sunnmørsalpane i Vinter 2018 (Sunnmøre Apls in Winter) #Norway #Norge #Winter #Snow"
        },
        {
            "id": "18031730701274357",
            "caption": "Sunset in Senja Island 2019 #Norway #Norge #Summer #Sunset"
        },
        {
            "id": "17853791336158692",
            "caption": "Stryn (River Stryn) 2019 #Norway #Norge #Fjords #Spring"
        },
        {
            "id": "17857052939105296",
            "caption": "Bryggen i Bergen (Bryggen in Bergen) 2020 #Norway #Norge #UNESCO_WorldHeritageSite"
        },
        {
            "id": "18030433645273244",
            "caption": "Reine, Lofoten Islands 2018 #Norway #Norge #Reine #Lofoten #"
        },
        {
            "id": "17920837024433615",
            "caption": "Tromsø, Norway 2019 #Norway #Norge #ArcticCircle #NorthernLights #Spring"
        },
        {
            "id": "17877031249783316",
            "caption": "Lofoten, Norway 2020 #Norway #Norge #WorldMostBeautifulVillage #Spring"
        },
        {
            "id": "17893319449573123",
            "caption": "Buarbreen Glacier 2020 #Norway #Norge #Clacier #Summer"
        },
        {
            "id": "17857096412107700",
            "caption": "#Summer\n\nTrolltunga, Norway 2020 #Norway #Norge #Hiking #Mountains"
        }
    ],
    "paging": {
        "cursors": {
            "before": "QVFIUlBKMVdEOENVOHBxaE1DZAE0yc0djRzRHWXhlRDBBWlBaTXBFWTFFeVFpRmZAVMG5lU1NfQV93Qi1lUk1idzBFOTZAQZA0VOMjVkSWJWbHFwSXZAxTVk1NEpB",
            "after": "QVFIUkR6RmhCS1N6RWhQMUNuTnJJTHFMN3RseHRzcmI4bGhGODc0YmY5cUpQNHpfRHc2WWg1Qkw2M2NLVm5zc1FRMFBHcE1MOXJwR3IyZA0hSZA0JSbGwzbTZAR"
        }
    }
};
var postsDetail = [
	{
		"id": "17881831846692544",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116425934_1345413492468826_4068768161554879891_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=YgnN6tUNjbIAX-2sYeT&_nc_ht=scontent.cdninstagram.com&oh=3ff62467b25b950c427c26e68614e66a&oe=5F551561",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:50:40+0000"
	},
	{
		"id": "18031730701274357",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116206916_1313845362135150_388198107899883586_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=r1zWwnMex9sAX_yVkGC&_nc_ht=scontent.cdninstagram.com&oh=facec133d01c81c4cdd7154c57214550&oe=5F52D9D1",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:49:30+0000"
	},
	{
		"id": "17853791336158692",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116583655_1585954864907428_6213211192846772486_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=T5v8I57e0gUAX88qW1e&_nc_ht=scontent.cdninstagram.com&oh=49588e1197cb84af8a1449a464b52eab&oe=5F5519DC",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:48:57+0000"
	},
	{
		"id": "17857052939105296",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116836157_211077733627537_8448108796101610036_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=f5Gyne4RV7YAX_fdbre&_nc_ht=scontent.cdninstagram.com&oh=4abbec6f392ead5ce8acaeb464161d8e&oe=5F513F72",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:48:20+0000"
	},
	{
		"id": "18030433645273244",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116336135_598844570819704_124368746804534124_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=CKS75xkunrwAX90b1oG&_nc_ht=scontent.cdninstagram.com&oh=da39e8e42a5c6e659e9c5a043272975d&oe=5F53979F",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:47:25+0000"
	},
	{
		"id": "17920837024433615",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116438979_910251432788386_6352879977360946468_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=1t6UJ1fa1hIAX9OTGQA&_nc_ht=scontent.cdninstagram.com&oh=7bc2197e6f83ddd18b6302cfa2f5c0ae&oe=5F52850C",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:36:59+0000"
	},
	{
		"id": "17877031249783316",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116311431_158100222549122_4054035630097398325_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=t4MO54qHdCsAX8olcrT&_nc_ht=scontent.cdninstagram.com&oh=6adae528827a7f9628908b079fc22eab&oe=5F531F09",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:36:18+0000"
	},
	{
		"id": "17893319449573123",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116131415_189052949303889_1186121689986263438_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=O8poU_1h4a8AX8vPdqM&_nc_ht=scontent.cdninstagram.com&oh=db34df035f5c0fea91369efe0ae78e17&oe=5F51BC00",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:30:03+0000"
	},
	{
		"id": "17857096412107700",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116018054_1741047456057162_3139274299350196326_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=xYQISDjeLvQAX8m_Ua-&_nc_ht=scontent.cdninstagram.com&oh=ad93c2d1292d37c5b5b4f9c5092bfd84&oe=5F53FA11",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:29:10+0000"
	}
];
var postDetail = {
	"id": "17881831846692544",
	"media_type": "IMAGE",
	"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116425934_1345413492468826_4068768161554879891_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=YgnN6tUNjbIAX-2sYeT&_nc_ht=scontent.cdninstagram.com&oh=3ff62467b25b950c427c26e68614e66a&oe=5F551561",
	"username": "anups.sd11",
	"timestamp": "2020-07-30T12:50:40+0000",
	"caption": "#Summer Trolltunga, Norway 2020 #Norway #Norge #Hiking #Mountains"
};
var postsDetails = [
	{
		"id": "17881831846692544",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116425934_1345413492468826_4068768161554879891_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=YgnN6tUNjbIAX-2sYeT&_nc_ht=scontent.cdninstagram.com&oh=3ff62467b25b950c427c26e68614e66a&oe=5F551561",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:50:40+0000",
		"caption": "Sunnmørsalpane i Vinter 2018 (Sunnmøre Apls in Winter) #Norway #Norge #Winter #Snow",
		"comments": [],
		"isLiked": false,
		"numLikes": 100
	},
	{
		"id": "18031730701274357",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116206916_1313845362135150_388198107899883586_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=r1zWwnMex9sAX_yVkGC&_nc_ht=scontent.cdninstagram.com&oh=facec133d01c81c4cdd7154c57214550&oe=5F52D9D1",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:49:30+0000",
		"caption": "Sunset in Senja Island 2019 #Norway #Norge #Summer #Sunset",
		"comments": [],
		"isLiked": false,
		"numLikes": 113
	},
	{
		"id": "17853791336158692",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116583655_1585954864907428_6213211192846772486_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=T5v8I57e0gUAX88qW1e&_nc_ht=scontent.cdninstagram.com&oh=49588e1197cb84af8a1449a464b52eab&oe=5F5519DC",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:48:57+0000",
		"caption": "Stryn (River Stryn) 2019 #Norway #Norge #Fjords #Spring",
		"comments": [],
		"isLiked": false,
		"numLikes": 124
	},
	{
		"id": "17857052939105296",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116836157_211077733627537_8448108796101610036_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=f5Gyne4RV7YAX_fdbre&_nc_ht=scontent.cdninstagram.com&oh=4abbec6f392ead5ce8acaeb464161d8e&oe=5F513F72",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:48:20+0000",
		"caption": "Bryggen i Bergen (Bryggen in Bergen) 2020 #Norway #Norge #UNESCO_WorldHeritageSite",
		"comments": [],
		"isLiked": false,
		"numLikes": 108
	},
	{
		"id": "18030433645273244",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116336135_598844570819704_124368746804534124_n.jpg?_nc_cat=107&_nc_sid=8ae9d6&_nc_ohc=CKS75xkunrwAX90b1oG&_nc_ht=scontent.cdninstagram.com&oh=da39e8e42a5c6e659e9c5a043272975d&oe=5F53979F",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:47:25+0000",
		"caption": "Reine, Lofoten Islands 2018 #Norway #Norge #Reine #Lofoten #",
		"comments": [],
		"isLiked": false,
		"numLikes": 152
	},
	{
		"id": "17920837024433615",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116438979_910251432788386_6352879977360946468_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=1t6UJ1fa1hIAX9OTGQA&_nc_ht=scontent.cdninstagram.com&oh=7bc2197e6f83ddd18b6302cfa2f5c0ae&oe=5F52850C",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:36:59+0000",
		"caption": "Tromsø, Norway 2019 #Norway #Norge #ArcticCircle #NorthernLights #Spring",
		"comments": [],
		"isLiked": false,
		"numLikes": 120
	},
	{
		"id": "17877031249783316",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116311431_158100222549122_4054035630097398325_n.jpg?_nc_cat=111&_nc_sid=8ae9d6&_nc_ohc=t4MO54qHdCsAX8olcrT&_nc_ht=scontent.cdninstagram.com&oh=6adae528827a7f9628908b079fc22eab&oe=5F531F09",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:36:18+0000",
		"caption": "Lofoten, Norway 2020 #Norway #Norge #WorldMostBeautifulVillage #Spring",
		"comments": [],
		"isLiked": false,
		"numLikes": 129
	},
	{
		"id": "17893319449573123",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116131415_189052949303889_1186121689986263438_n.jpg?_nc_cat=101&_nc_sid=8ae9d6&_nc_ohc=O8poU_1h4a8AX8vPdqM&_nc_ht=scontent.cdninstagram.com&oh=db34df035f5c0fea91369efe0ae78e17&oe=5F51BC00",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:30:03+0000",
		"caption": "Buarbreen Glacier 2020 #Norway #Norge #Clacier #Summer",
		"comments": [],
		"isLiked": false,
		"numLikes": 140
	},
	{
		"id": "17857096412107700",
		"media_type": "IMAGE",
		"media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/116018054_1741047456057162_3139274299350196326_n.jpg?_nc_cat=103&_nc_sid=8ae9d6&_nc_ohc=xYQISDjeLvQAX8m_Ua-&_nc_ht=scontent.cdninstagram.com&oh=ad93c2d1292d37c5b5b4f9c5092bfd84&oe=5F53FA11",
		"username": "anups.sd11",
		"timestamp": "2020-07-30T12:29:10+0000",
		"caption": "#Summer\n\nTrolltunga, Norway 2020 #Norway #Norge #Hiking #Mountains",
		"comments": [],
		"isLiked": false,
		"numLikes": 187
	}
]

export { posts, postsDetail, postDetail, postsDetails }