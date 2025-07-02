// 通用 API 返回数据处理工具
// 参数说明：
// - res: fetch 的 Response 对象
// - data: 已解析的 json 数据
// - message: antd 的 message 组件
// - onAddOutput: 输出回调
// - successLabel: 成功时的输出标签
// - errorLabel: 失败时的输出标签
// - valueExtractor: 可选，自定义结果提取函数
export function handleApiResponse({
    res,
    data,
    message,
    onAddOutput,
    successLabel = 'Result',
    errorLabel = 'Error',
    valueExtractor
}) {
    if (!res.ok || data.error) {
        let msg = data.error || errorLabel, descriptions = "";
        if (Array.isArray(data.details)) {
            const descs = data.details.map(d => d.description).filter(Boolean);
            descriptions = descs.join('; ');
        }
        if (data.description) {
            descriptions += (descriptions ? '; ' : ': ') + data.description;
        }
        message.error(msg + ": " + descriptions);
        if (onAddOutput) {
            onAddOutput({
                label: msg,
                value: descriptions || JSON.stringify(data)
            });
        }
        return false;
    }
    message.success(successLabel + ' Success');
    if (onAddOutput) {
        let value;
        if (valueExtractor) {
            value = valueExtractor(data);
        } else if (data && data.data && typeof data.data === 'object' && data.data.value !== undefined) {
            value = typeof data.data.value === 'object'
                ? JSON.stringify(data.data.value, null, 2)
                : data.data.value;
        } else {
            value = data.data || JSON.stringify(data);
        }
        onAddOutput({
            label: successLabel + ' Result',
            value
        });
    }
    return true;
}
