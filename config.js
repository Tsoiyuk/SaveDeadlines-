// 抱佛脚 DDL · 同步设置
// 两项都留空 = 不开启登录，任务只存在各自设备上。
// 填好之后，页面上会出现「登录，让电脑和手机自动同步」。
// 在哪里找：Supabase 项目 → Project Settings → API（或 Data API）
window.DDL_SYNC = {
  url: "https://retedierxqbrvhkdzdsj.supabase.co/rest/v1/",  // Project URL，形如 https://abcdefgh.supabase.co
  key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldGVkaWVyeHFicnZoa2R6ZHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0MDUzMjMsImV4cCI6MjEwNjk4MTMyM30.UaHdrLjlTyrB1WlXUc-RDhlD1loIeSpeFvATnhfjNsI"   // anon public key（以 eyJ 开头的一长串；这个 key 本来就是公开的，放在网页里没关系）
};
