
import FetchAction from './Fetch';

export default class CreateProject {

    constructor(comp) {
        this.comp = comp;
    }

    extend = [FetchAction]

    changeCreateProjectFormValue = (field) => {
        return (e) => {
            const {props} = this.comp;
            const {cp, dispatch} = props;

            dispatch({
                type: 'cp/update',
                payload: {
                    createProjectFormValue: {
                        ...cp.createProjectFormValue,
                        [field]: e.target ? e.target.value : e
                    }
                }
            });
        }
        
    }

    // 创建项目
    doCreateProject = () => {
        const {props} = this.comp;
        const {cp, dispatch} = props;

        let postData = {
            ...cp.createProjectFormValue
        };

        this.fetchData({
            url: '/api/createProject',
            data: postData
        })
            .then((res) => {
                dispatch({
                    type: 'cp/update',
                    payload: {
                        projects: res.projects
                    }
                });
            });
    }

}