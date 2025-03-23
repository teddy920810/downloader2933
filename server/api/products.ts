export default defineEventHandler(async (event) => {
  // 这里可以连接数据库或调用其他服务
  return {
    products: [
      { id: 1, name: '产品1', price: 100 },
      { id: 2, name: '产品2', price: 200 }
    ]
  }
})