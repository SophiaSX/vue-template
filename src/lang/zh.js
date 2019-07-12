export default {
  login: {
    title: '欢迎登录教学管理系统',
    logIn: '登 录',
    username: '用户名',
    password: '密码',
    userNameError: '请输入正确的账号',
    passWordError: '密码不能为空',
    errorMsg: '用户名或密码错误'
  },
  switchLanguage: {
    successMsg: '切换语言成功'
  },
  select: {
    onLine: '在线',
    logOut: '安全退出',
    selectRole: '请选择角色',
    Reminder: '请选择角色：',
    system: '进入系统'
  },
  route: {
    Home: '首页',
    // 组织权限管理
    OrganizationalAuthority: '组织权限管理',
    TeacherRole: '教学角色管理',
    Organization: '组织管理',
    // 基础信息管理
    BasicInformation: '基础信息管理',
    Semester: '年度学期管理',
    Department: '部门管理',
    // 教师及账号管理
    TeachersAndAccounts: '教师及账号管理',
    TeacherInfo: '教师信息管理',
    TeacherAdmin: '教学管理员管理',
    // 学生信息管理
    StudentInformation: '学生信息管理',
    StudentInfo: '学生信息管理',
    // 课程信息管理
    CourseInformation: '课程信息管理',
    Course: '课程管理',
    CourseResources: '课程资源管理',
    CourseTeachers: '课程教师管理',
    CourseObserver: '课程观察员管理',
    // 选课管理
    ElectiveCourse: '选课管理',
    StudentCourse: '学生选课管理',
    // 报表统计
    ReportStatistics: '报表统计',
    ElectiveStatistics: '选课统计',
    AchievementStatistics: '成绩统计',
    CourseStatistics: '课程统计',
    TeacherBehaviorStatistics: '教师行为统计'
  },
  placeholder: {
    select: '请选择',
    enter: '请输入内容'
  },
  common: {
    welcome: ' ，欢迎来到教学管理系统！',
    switchSys: '切换系统',
    hello: '您好，'
  },
  modules: {
    common: {
      sequence: '学号',
      status: '状态',
      active: '启用',
      inactive: '禁用',
      edit: '编辑',
      publish: '发布',
      draft: '草稿',
      delete: '删除',
      cancel: '取 消',
      confirm: '确 定',
      ok: '确 定',
      save: '保 存',
      add: '添 加',
      remark: '备注',
      createTime: '创建时间',
      endTime: '结束时间',
      startTime: '开始时间',
      operation: '操作',
      operSuccess: '操作成功',
      operFail: '操作失败',
      delFail: '删除失败',
      delCancel: '已取消删除',
      yes: '是',
      no: '否',
      startStopDate: '起止日期',
      to: '至',
      startDate: '开始日期',
      endDate: '结束日期'
    },
    deptMgt: {
      name: '管理部门',
      remark: '说明',
      validation: {
        add: {
          name: {
            required: '请输入管理部门',
            length: '长度在20个字符以内'
          },
          remark: {
            length: '长度在100字符以内'
          }
        }
      }
    },
    semesterMgt: {
      name: '年度学期',
      code: '年度学期代码',
      ifCurrent: '是否当前年度学期',
      setCurrent: '设为当前年度学期',
      cancelCurrent: '取消当前年度学期',
      validation: {
        add: {
          code: '请输入年度学期代码',
          name: '请输入年度学期',
          date: '请选择起止日期'
        }
      }
    }
  }
}
