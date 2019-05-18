


export default {
    name: 'cp',
    data: {
        createProjectModalVisible: false,
        projectName: '',
        currentPage: 'create-project', // 当前页面 create-project project-edit-page
        libraryList: [], // 组件库列表
        createProjectFormValue: {// 创建项目时表单的编辑值
            projectName: '',
            library: '',
            needRouter: 'no',
        },
        projects: [], // 已有项目列表
        componentsList: [], // 当前可用组件列表

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