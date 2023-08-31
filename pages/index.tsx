import { Button, HTag, P, Tag } from '../components'

export default function Home() {
  return (
    <>
      <HTag tag='h2'>Lor</HTag>
      <Button apperance='primary'>Clock</Button>
      <Button apperance='ghost'>Clock</Button>
      <P size='s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique animi facere amet, debitis numquam fugiat eius a dignissimos temporibus ullam, dolorem tenetur impedit, recusandae provident nam necessitatibus nisi mollitia ducimus?</P>
      <P size='m'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique animi facere amet, debitis numquam fugiat eius a dignissimos temporibus ullam, dolorem tenetur impedit, recusandae provident nam necessitatibus nisi mollitia ducimus?</P>
      <P size='l'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique animi facere amet, debitis numquam fugiat eius a dignissimos temporibus ullam, dolorem tenetur impedit, recusandae provident nam necessitatibus nisi mollitia ducimus?</P>
      <Tag size='m' color='primary' href='/'>Hello</Tag>
    </>
    )
}
