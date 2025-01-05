/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import CitiesController from '#controllers/cities_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/auth/register', [AuthController, 'register'])
router.post('/auth/login', [AuthController, 'login'])
router.get('/cities', [CitiesController, 'index'])
router.post('/cities', [CitiesController, 'create'])

router
  .group(() => {
    router.get('/me', async ({ auth }) => {
      return auth.user
    })
    router.get('/me/city', [AuthController, 'getCity'])
    router.post('/logout', [AuthController, 'logout'])
    router.post('/me/update_city', [AuthController, 'updateCity'])
  })
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )
