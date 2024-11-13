const domain = '/portal-api/portal';

let address = {
    login: `${domain}/login`,
    //成员履历
    getUserDetail: `${domain}/getUserDetail`,
    //组织结构
    getDeptList: `${domain}/getDeptList`,
    //组织成员
    getUserByDeptId: `${domain}/getUserByDeptId`,
    //组织成员
    getUserinfo: `${domain}/getUserInfo`,
    //资讯分类
    getNewTypeList: `${domain}/getNewTypeList`,
    //资讯分类下的资讯新闻
    getNewsByTypeId: `${domain}/getNewsByTypeId`,
    //资讯详细信息
    getNewsInfo: `${domain}/getNewsInfo`,
    //资讯公告信息
    getNoticeInfo: `${domain}/getNoticeInfo`,
    //资讯公告
    getNoticeList: `${domain}/getNoticeList`,
    //资讯审核内容(状态：1 待审核 2 已审核)
    getNewsByStatus: `${domain}/getNewsByStatus`,
    //公告审核内容 (状态：1 待审核 2 已审核)
    getNoticesByStatus: `${domain}/getNoticesByStatus`,
    //判断是否是审核人
    isReviewer: `${domain}/isReviewer`,
    //资讯审核 (传值 newId 和 status=2)
    approvalNews: `${domain}/approvalNews`,
    //公告审核 (传值noticeId和status=2)
    approvalNotice: `${domain}/approvalNotice`,
    //领导视察
    getInspectList: `${domain}/getInspectList`,
    //领导视察详情
    getInspectInfo: `${domain}/getInspectInfo`,
    //心得体会列表
    getFeelList: `${domain}/getFeelList`,
    //心得体会详情
    getFeelInfo: `${domain}/getFeelInfo`,
    //单位交流
    getExchangeList: `${domain}/getExchangeList`,
    //单位交流详情
    getExchangeInfo: `${domain}/getExchangeInfo`,
    //典型事迹
    getDeedList: `${domain}/getDeedList`,
    //典型事迹详情
    getDeedInfo: `${domain}/getDeedInfo`,
    //荣誉奖项
    getAwardList: `${domain}/getAwardList`,
    //荣誉奖项详情
    getAwardInfo: `${domain}/getAwardInfo`,
    //分享美文列表
    getArticleList: `${domain}/getArticleList`,
    //分享美文详情
    getArticleInfo: `${domain}/getArticleInfo`,
    //十大亮点详情
    getLightInfo: `${domain}/getLightInfo`,
    //十大亮点
    getLightList: `${domain}/getLightList`,
    //学习计划详情
    getPlanInfo: `${domain}/getPlanInfo`,
    //学习计划列表 自己提交的
    getPlanList: `${domain}/getPlanList`,
    //问题墙详情
    getProblemInfo: `${domain}/getProblemInfo`,
    //问题墙列表
    getProblemList: `${domain}/getProblemList`,
    //会议记录详情
    getRecordInfo: `${domain}/getRecordInfo`,
    //会议记录列表
    getRecordList: `${domain}/getRecordList`,
    //暖心故事详情
    getStoryInfo: `${domain}/getStoryInfo`,
    //暖心故事
    getStoryList: `${domain}/getStoryList`,
    //小组故事详情
    getTaleInfo: `${domain}/getTaleInfo`,
    //小组故事列表
    getTaleList: `${domain}/getTaleList`,
    //学习计划删除
    removePlan: `${domain}/removePlan`,
    //上传
    upload: `${domain}/upload`,
    //会议记录天添加
    addRecord: `${domain}/addRecord`,
    //学习计划添加
    addPlan: `${domain}/addPlan`,
    //问题墙添加
    addProblem: `${domain}/addProblem`,
    //心得体会增加
    addFeel: `${domain}/addFeel`,
    //分享美文添加
    addArticle: `${domain}/addArticle`,
    //小组故事添加
    addTale: `${domain}/addTale`,
    //最新资讯
    getNewsList: `${domain}/getNewsList`,
    //小组学分排行
    getDeptRankList: `${domain}/getDeptRankList`,
    //成员学分排行
    getUserRankList: `${domain}/getUserRankList`,
    //成员学分记录
    getLearnInfo: `${domain}/getLearnInfo`,
    //学分添加
    addLearn: `${domain}/addLearn`,
    //轮播图片
    getPictureList: `${domain}/getPictureList`,
    //修改密码
    resetPassword: `${domain}/resetPassword`,
    //修改头像
    editAvatar: `${domain}/editAvatar`,
    //试卷详情
    getPagerInfo: `${domain}/getPagerInfo`,
    //考试列表 userId 考试对象
    getPagerList: `${domain}/getPagerList`,
    //添加考试答案
    addPagerAnswer: `${domain}/addPagerAnswer`,
    //违规违纪列表
    getViolateList: `${domain}/getViolateList`,
    getViolateInfo: `${domain}/getViolateInfo`,
    //选举任务列表
    selectVoteList: `${domain}/selectVoteList`,
    //选举结果
    getVoteResult: `${domain}/getVoteResult`,
    //组织架构图
    getDeptPicture: `${domain}/getDeptPicture`,
}
export {
    address
}
