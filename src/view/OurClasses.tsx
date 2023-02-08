import { motion } from 'framer-motion'

import { SelectedPage, TypeClass } from '@/shared/types'
import { HText } from '@/components/HText'
import { Class } from '@/components/Class'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'

const classes: TypeClass[] = [
  {
    name: 'name name name',
    description:
      'description description description description description description description',
    image: image1,
  },
  {
    name: 'name name name',
    description:
      'description description description description description description description',
    image: image2,
  },
  {
    name: 'name name name',
    description:
      'description description description description description description description',
    image: image3,
  },
  {
    name: 'name name name',
    description:
      'description description description description description description description',
    image: image4,
  },
  {
    name: 'name name name',
    description:
      'description description description description description description description',
    image: image5,
  },
  {
    name: 'name name name',
    description:
      'description description description description description description description',
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -70 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='p-3 md:w-3/5'>
            <HText>Our classes</HText>
            <p className='py-5 '>
              We provide world class fitness equipment, trainers and classes to get you to your
              ultimate fitness goals with ease. We provide true care into each and every member.
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[355px] w-full overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {classes.map((item: TypeClass, index) => (
              <Class
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
