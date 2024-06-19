// 请勿删除
if (import.meta.env.PROD) {
  const copyright_common_style = 'font-size: 14px; margin-bottom: 2px; padding: 6px 8px; color: #fff;'
  const copyright_main_style = `${copyright_common_style} background: #e24329;`
  const copyright_sub_style = `${copyright_common_style} background: #707070;`
  // eslint-disable-next-line no-console
  console.info('%ctc-startkit%c快速启动套件', copyright_sub_style, copyright_main_style, '\nhttps://github.com/wyc001122/tc-startkit')
}

export { }
