const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "INDEPS Server API docs",
            version: "1.0.0",
            description: "Using Express",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    components: {  // response에 대한 정의와 error에 대한 return을 정의할 수 있음(swagger 한정)
		res: {
			BadRequest: {
	       description: '잘못된 요청.',
			},
	    Forbidden: {
		    description: '권한이 없음.',
	    },
	    NotFound: {
		    description: '없는 리소스 요청.',
	    }
		},
    errorResult: {
	    Error: {
		    type: 'object',
		    properties: {
			    errMsg: {
				    type: 'string',
				    description: 'Error.'
			    }
		    }
	    }
    }
	},
  schemes: ['http', 'https'], // 사용 가능한 통신 방식
  definitions:  // 모델 정의 (User 모델에서 사용되는 속성 정의)
  {
	'USER': {
		type: 'object',
	    properties: {
			id: {
				type: 'string'
			},
			age: {
				type: 'integer'
			}
		  }
        }
    },
    apis: ["./routes/*.js",'./swagger.js'],
};

module.exports = options;