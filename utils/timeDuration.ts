import * as dayjs from 'dayjs';

function formatTimeSpan(duration: number): string {
  const years = Math.floor(duration / (365 * 24 * 60 * 60)); // 计算年数
  const months = Math.floor(
    (duration % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60)
  ); // 计算月数
  const days = Math.floor((duration % (30 * 24 * 60 * 60)) / (24 * 60 * 60)); // 计算天数
  const hours = Math.floor((duration % (24 * 60 * 60)) / (60 * 60)); // 计算小时数
  const minutes = Math.floor((duration % (60 * 60)) / 60); // 计算分钟数
  const seconds = duration % 60; // 计算秒数

  let result = '';
  if (years > 0) {
    result += `${years}年`;
  }
  if (months > 0) {
    result += `${months}个月`;
  }
  if (days > 0) {
    result += `${days}天`;
  }
  if (hours > 0) {
    result += `${hours}小时`;
  }
  if (
    minutes > 0 ||
    (years === 0 && months === 0 && days === 0 && hours === 0)
  ) {
    result += `${minutes}分钟`;
  }
  if (
    seconds > 0 ||
    (years === 0 && months === 0 && days === 0 && hours === 0 && minutes === 0)
  ) {
    result += `${seconds}秒`;
  }

  return result;
}

export default formatTimeSpan;
