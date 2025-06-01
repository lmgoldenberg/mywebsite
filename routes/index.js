import routes from './routes.js'

const constructorMethod = (app) => {
    app.use('/', routes)
    app.use('*',(req, res) => {
        res.redirect('/')
    })
}
export default constructorMethod