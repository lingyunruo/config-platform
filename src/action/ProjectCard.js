
import FetchAction from './Fetch';

export default class ProjectCard {

    constructor(comp) {
        this.comp = comp;
    }

    extend = [FetchAction]

    // 打开项目编辑页面
    openProjectPage = (projectItem) => {
        return () => {
            const {props} = this.comp;
            const {dispatch, cp} = props;

            this.fetchData({
                url: '/api/initProjectCard',
                data: {
                    configPath: projectItem.configPath
                }
            })
                .then((res) => {
                    dispatch({
                        type: 'cp/update',
                        payload: {
                            currentPage: 'project-edit-page',
                            componentsList: res.componentsList
                        }
                    })
                });
        }
    }
}