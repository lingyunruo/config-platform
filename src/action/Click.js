
import Fetch from './Fetch';

export default class Click {
    constructor(comp) {
        this.comp = comp;
    }

    extend = [Fetch]

    createProject = () => {
        const {props} = this.comp;
        const {dispatch} = props;
        
        dispatch({
            type: 'cp/update',
            payload: {
                currentPage: 'create-project'
            }
        });
    }
}