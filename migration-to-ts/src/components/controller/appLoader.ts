import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '71a2203c447c459f87dd94814ab755bb', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
