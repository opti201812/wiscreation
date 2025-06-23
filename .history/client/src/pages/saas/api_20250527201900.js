// 判断环境，返回不同的API前缀
export function getApiBaseUrl() {
    // 你可以根据实际情况调整判断条件
    if (process.env.NODE_ENV === 'production') {
        // 生产环境
        return 'http://wiscreationsoft.com:4500';
    } else {
        // 开发环境
        return 'http://wiscreationsoft.com:4500';
    }
}

// 也可以直接导出常量
export const API_BASE_URL = getApiBaseUrl(); 