const router = require('express').Router()

const {
  getUsers,
  getUser,
  createUser,
  updateUser
  } = require('./../controllers/controll-user')


  /**
 * @swagger
 * tags:
 *   name: Users
 *   description: API para gestionar los usuarios
 */



/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Éxito, devuelve la lista de usuarios
 *       500:
 *         description: Error del servidor
 */ 
router.get('/users', getUsers)




/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtiene un usuario por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Éxito, devuelve el usuario
 *       500:
 *         description: Error del servidor
 */
router.get('/users/:id', getUser)







/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Crea un nuevo usuario en la base de datos.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - lastName
 *               - mail
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *                 example: Juan
 *               lastName:
 *                 type: string
 *                 description: Apellido del usuario
 *                 example: Pérez
 *               mail:
 *                 type: string
 *                 description: Correo electrónico del usuario
 *                 example: usuario@example.com
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: securepassword
 *               role:
 *                 type: string
 *                 description: Rol del usuario (opcional)
 *                 example: Administrador
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: El correo electrónico ya está registrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: El correo electrónico ya está registrado
 *       500:
 *         description: Error del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: object
 */
router.post('/users', createUser)


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualiza un usuario existente por su ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mail:
 *                 type: string
 *             example:
 *               mail: usuario@example.com
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: El correo electrónico ya está registrado
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */

router.put('/users/:id', updateUser)


module.exports = router




/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - mail
 *         - password
 *         - role
 *       properties:
 *         _id:
 *           type: string
 *           description: ID del usuario, generado automáticamente
 *           readOnly: true
 *         mail:
 *           type: string
 *           description: Correo electrónico del usuario
 *         password:
 *           type: string
 *           description: Contraseña del usuario
 *         role:
 *           type: string
 *           description: Rol del usuario
 *         __v:
 *           type: number
 *           description: Versión del esquema del usuario
 *       example:
 *         mail: "usuario@gmail.com"
 *         password: "123"
 *         role: "Usuario"
 */