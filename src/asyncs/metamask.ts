/**
 * 自動接続可能かどうか判定する
 */
 export async function checkAutoConnectable(): Promise<boolean> {
  const accounts = await window.ethereum?.request<string[]>({ method: 'eth_accounts' })
  if (!accounts || accounts.length === 0) return false
  const isUnlocked = await window.ethereum._metamask.isUnlocked()
  return isUnlocked
}
