import { Input } from '@nextui-org/input'

export function Search() {
  return (
    <Input
      type="text"
      placeholder="请输入搜索内容"
      labelPlacement="outside"
      startContent={
        <span className="icon-[mingcute--search-2-fill] pointer-events-none flex-shrink-0 text-2xl text-default-400" />
      }
    />
  )
}
