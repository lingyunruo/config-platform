
import FetchAction from './Fetch';

export default class MainAction {
    constructor(comp) {
        this.comp = comp;
    }

    extend = [FetchAction]

    didMount = () => {

        this.initData();

    }

    initData = () => {
        const {props} = this.comp;
        const {dispatch} = props;

        this.fetchData({
            url: '/api/getInitData'
        })
            .then((res) => {
                dispatch({
                    type: 'cp/update',
                    payload: {
                        projects: res.projects,
                        libraryList: res.libraryList
                    }
                });
            });
    }
}