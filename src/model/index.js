


export default {
    name: 'cp',
    data: {
        createProjectModalVisible: false,
        projectName: '',
        currentPage: 'create-project', // 当前页面 create-project
        libraryList: [], // 组件库列表
        createProjectFormValue: {
            projectName: '',
            library: '',
            needRouter: 'no',
        },
        projects: []
    },
    sync: {
        update: (state, payload) => {
            return {
                ...state,
                ...payload
            }
        }
    },
    async: {}
}