$scope.navList = [
    { url: 'homepage', navName: 'homepage', title: 'Home', icon: 'fa-home', translation: 'NAV.HOME', isMultiLevel: false },
    { url: "workspace({initTab: 'projects'})", navName: 'workspace', title: 'Workspace', icon: 'fa-diamond', translation: 'NAV.WS', isMultiLevel: false },
    { url: "datasource({initTab: 'files'})", navName: 'datasource', title: 'Datasource', icon: 'fa-database', translation: 'NAV.DS', isMultiLevel: false },
    // { url: 'preprocess-design', navName: 'preprocess-design', title: 'Data Preprocess', icon: 'fa-filter', translation: 'NAV.DP', isMultiLevel: false },
    { isMultiLevel: true, navName: 'Templates', title: 'Templates', icon: 'fa-cubes', translation: 'NAV.TEMPLATE', subLevel:
            [
                { url: "allSolutions({search: 'General'})", navName: 'General', title: 'General', translation: 'HM.GENERAL' },
                { url: "allSolutions({search: 'Industry'})", navName: 'Industry', title: 'Solution', translation: 'HM.SOLUTION' }
            ]
    },
    { url: 'self-design({solutionId: null})', navName: 'self-design', title: 'Design', icon: 'fa-flask', translation: 'HM.DESIGN', isMultiLevel: false },
    { url: 'job', navName: 'job', title: 'Job', icon: 'fa-tasks', translation: 'NAV.JOB', isMultilevel: false },
    { url: 'codeStudio', navName: 'codeStudio', title: 'Code Studio', icon: 'fa-code', translation: 'NAV.CS', isMultiLevel: false },
    { url: 'resourceUsage', navName: 'resourceUsage', title: 'Resource Usage', icon: 'fa-dashboard', translation: 'NAV.USAGE', isMultiLevel: false },
];
$scope.nav = {
    isCollapsed: false
};