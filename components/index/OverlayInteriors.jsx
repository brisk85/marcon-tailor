
//
import { Overlay, OverlayContent, OverlayImage, OverlayGallery } from 'components/index'
import { Accordion, AccordionItem } from 'components/ui'

//
export default function OverlayInteriors (props) {
  return (
    <Overlay {...props}>
      <OverlayGallery images={[
        { file : `/img/index/interiors/200619-291.jpg`, caption : '2 Bedroom', blurb : 'Living' },
        { file : `/img/index/interiors/Tailor-Web-7.jpg`, caption : '2 Bedroom', blurb : 'Living' },
        { file : `/img/index/interiors/Tailor-Web-23.jpg`, caption : '2 Bedroom', blurb : 'Living' },
        { file : `/img/index/interiors/200619-419.jpg`, caption : '2 Bedroom', blurb : 'Kitchen' },
        { file : `/img/index/interiors/3_200619-152_3600x2399.jpg`, caption : '1 Bedroom', blurb : 'Living' },
        { file : `/img/index/interiors/Tailor-Web-17.jpg`, caption : '1 Bedroom', blurb : 'Kitchen' },
        { file : `/img/index/interiors/Tailor-Web-14.jpg`, caption : '1 Bedroom', blurb : 'Bathroom' },
        { file : `/img/index/interiors/Tailor-Web-18.jpg`, caption : '1 Bedroom', blurb : 'Bedroom' },
        { file : `/img/index/interiors/Tailor-Web-22.jpg`, caption : '2 Bedroom', blurb : 'Bedroom' },
        { file : `/img/index/interiors/Tailor-Web-25.jpg`, caption : '2 Bedroom', blurb : 'Bedroom' },
      ]} />
    </Overlay>
  )
}
