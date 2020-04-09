// import { parse } from 'mark-gor'
// import { Tabs, TabsNav, Tab, TabsContent, TabPane } from '/elements/tabs'
//
// const Markdown = ({ markdown }) => {
//   const parsed = parse(markdown)
//   console.log(parsed)
//   return parsed
// }
//
// const Docs = ({ docs }) => {
//   return (
//     <Tabs>
//       <TabsNav>
//         {docs.map(([title]) => <Tab>{title}</Tab>)}
//       </TabsNav>
//       <TabsContent>
//         {docs.map(([title, content]) =>
//           <TabPane>
//             <Markdown markdown={content} />
//           </TabPane>
//         )}
//       </TabsContent>
//     </Tabs>
//   )
// }
import { ElementHolder } from '/elements/element-holder'
import { Legend } from '/elements/legend'
import { components } from '/components'

export function Documentation ({ name }) {
  const { component, description, version } = components.find(c => c.name.replace('@app-elements/', '') === name)
  console.log('Documentation', { component })
  return (
    <div className='container'>
      <div className='elements-wrapper'>
        <Legend />

        <div className='elements-content'>
          <ElementHolder key={name} heading={component} name={name} version={version}>
            <p>{description}</p>
          </ElementHolder>
        </div>
      </div>
    </div>
  )
}
