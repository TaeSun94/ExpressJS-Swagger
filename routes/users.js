var express = require('express');
var router = express.Router();

/**
 * @swagger
 * tags:
 *  name: USER
 * definitions:
 *  USER:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *        description: 사용자 이름
 *      age:
 *        type: number
 *        description: 사용자 나이
 */


/* GET users listing. */
/**
 * @openapi
 * /users/:
 *  get:
 *    tags: [USER]
 *    summary: User 리스트 조회 API
 *    produces:
 *      - application/json
 *    description: Get in user router!
 *    responses:
 *      200:
 *        description: Retruns string.
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @openapi
 * /users/user:
 *  get:
 *    description: Get in user router!
 *    parameters:
 *      - name: name
 *        in: query
 *        description: first value
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Retruns name.
 */
router.get('/user', function(req, res, next) {
  res.send(req.query.name);
});
/**
 * @swagger
 * /users/user/{name}:
 *  get:
 *    description: Get in user router!
 *    parameters:
 *      - name: name
 *        in: path
 *        description: first value
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Retruns name.
 */
router.get('/user/:name', function(req, res, next) {
  res.send(req.params.name);
});
/**
 * @swagger
 * /users/user:
 *  post:
 *    tags: [USER]
 *    summary: User의 회원가입 API
 *    description: 회원가입!
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: User Information
 *        in: body
 *        descriptio: user 정보
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *                name:
 *                  type: string
 *                  description: User 이름
 *                age:
 *                  type: number
 *                  description: User 나이
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              USER:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *                  age:
 *                    type: number
 *    responses:
 *      200:
 *        description: Retruns name.
 *        schema:
 *          type: object
 *          properties:
 *            USER:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                age:
 *                  type: number
 *      400:
 *        description: User Error
 *      500:
 *        description: Server Error
 */
router.post('/user', function(req, res, next) {
  res.send(req.body.USER);
});

module.exports = router;
