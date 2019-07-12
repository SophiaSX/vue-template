export default {
  login: {
    title: 'Login Form',
    logIn: 'Log In',
    username: 'Username',
    password: 'Password',
    userNameError: 'username is required',
    passWordError: 'password is required',
    errorMsg: 'wrong username or pwd'
  },
  switchLanguage: {
    successMsg: 'Switch Language Success'
  },
  select: {
    onLine: 'online',
    logOut: 'Logout',
    selectRole: 'Please select roles',
    Reminder: 'Reminder:Hello, please select a user role to enter the system first.',
    system: 'Enter the system'
  },
  route: {
    Home: 'Home',
    // 组织权限管理
    OrganizationalAuthority: 'Organizational Authority',
    TeacherRole: 'Teaching Role',
    Organization: 'Organization',
    // 基础信息管理
    BasicInformation: 'Basic Information',
    Semester: 'Annual Term',
    Department: 'Department',
    // 教师及账号管理
    TeachersAndAccounts: 'Teachers And Accounts',
    TeacherInfo: 'Teacher Information',
    TeacherAdmin: 'Teaching Administrator',
    // 学生信息管理
    StudentInformation: 'Student Information',
    StudentInfo: 'Student Information',
    // 课程信息管理
    CourseInformation: 'Course Information',
    Course: 'Course',
    CourseResources: 'Course Resources',
    CourseTeachers: 'Course Teachers',
    CourseObserver: 'Course Observer',
    // 选课管理
    ElectiveCourse: 'Elective course',
    StudentCourse: 'Students\' Elective Course',
    // 报表统计
    ReportStatistics: 'Report Statistics',
    ElectiveStatistics: 'Elective Statistics',
    AchievementStatistics: 'Achievement Statistics',
    CourseStatistics: 'Course Statistics',
    StudentBehaviorStatistics: 'Student Behavior Statistics',
    TeacherBehaviorStatistics: 'Teacher Behavior Statistics'
  },
  placeholder: {
    select: 'Please Select',
    enter: 'Please Enter'
  },
  common: {
    welcome: ' ，Welcome to teach management System！',
    switchSys: 'Switch System',
    hello: 'Hello，'
  },
  modules: {
    common: {
      sequence: 'SEQ',
      status: 'Status',
      active: 'Active',
      inactive: 'Inactive',
      edit: 'Edit',
      publish: 'Publish',
      draft: 'Draft',
      delete: 'Delete',
      cancel: 'Cancel',
      confirm: 'Confirm',
      ok: 'Ok',
      save: 'Save',
      add: 'Add',
      remark: 'Remark',
      createTime: 'Create Time',
      startTime: 'Start Time',
      endTime: 'End Time',
      operation: 'Operation',
      operSuccess: 'Operation Success',
      operFail: 'Operation Failed',
      delFail: 'Delete Failed',
      delCancel: 'Delete Canceled',
      yes: 'YES',
      no: 'NO',
      startStopDate: 'Start-stop Date',
      to: 'to',
      startDate: 'Start Date',
      endDate: 'End Date'
    },
    deptMgt: {
      name: 'Name',
      remark: 'Instruction',
      validation: {
        add: {
          name: {
            required: 'Name is required',
            minMax: '长度在20个字符以内'
          },
          remark: {
            required: '长度在100字符以内'
          }
        }
      }
    },
    semesterMgt: {
      name: 'Name',
      code: 'Code',
      ifCurrent: 'Current',
      setCurrent: 'Set Current',
      cancelCurrent: 'Cancel Current',
      validation: {
        add: {
          code: 'Code is required',
          name: 'Name is required',
          date: 'Date is required'
        }
      }
    }
  }
}
