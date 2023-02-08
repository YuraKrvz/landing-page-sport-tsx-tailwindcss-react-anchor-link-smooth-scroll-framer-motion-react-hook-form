import { motion } from 'framer-motion'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

import { SelectedPage, TypeBenefit } from '@/shared/types'
import { Benefit } from '@/components/Benefit'
import { HText } from '@/components/HText'
import { ButtonBasic } from '@/components/ButtonBasic'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const benefits: Array<TypeBenefit> = [
  {
    icon: <HomeModernIcon className='h-5 w-5 ' />,
    title: 'State of the art Facilities',
    description: `We provide world class fitness equipment, trainers and classes to
    get you to your ultimate fitness goals with ease. We provide true
    care into each and every member`,
  },
  {
    icon: <UserGroupIcon className='h-5 w-5 ' />,
    title: 'UserGroupIcon the art Facilities',
    description: `We provide world class fitness equipment, trainers and classes to
    get you to your ultimate fitness goals with ease. We provide true
    care into each and every member`,
  },
  {
    icon: <AcademicCapIcon className='h-5 w-5 ' />,
    title: 'AcademicCapIcon the art Facilities',
    description: `We provide world class fitness equipment, trainers and classes to
    get you to your ultimate fitness goals with ease. We provide true
    care into each and every member`,
  },
]

const container = {
  hidden: {},
  visible: {},
  transition: { staggerChildren: 0.2 },
}

export const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div className='' onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* Header */}
        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -70 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>More than just a GYM.</HText>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to get you to your
            ultimate fitness goals with ease. We provide true care into each and every member.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className='mt-5 items-center justify-between gap-8 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: TypeBenefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and descriptions */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* Graphics */}
          <img className='mx-auto' src={BenefitsPageGraphic} alt='Graphics' />
          {/* Description */}
          <div>
            {/* Title */}
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
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span>
                  </HText>
                </div>
              </div>
            </motion.div>
            {/* Description */}
            <div>
              <p className='my-5 '>
                We provide world class fitness equipment, trainers and classes to get you to your
                ultimate fitness goals with ease. We provide true care into each and every member.
                We provide world class fitness equipment, trainers and classes to get you to your
                ultimate fitness goals with ease. We provide true care into each and every member.
              </p>
              <p className='mb-5 '>
                We provide world class fitness equipment, trainers and classes to get you to your
                ultimate fitness goals with ease. We provide true care into each and every member.
                We provide world class fitness equipment, trainers and classes to get you to your
                ultimate fitness goals with ease. We provide true care into each and every member.
              </p>
            </div>

            {/* Button */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ButtonBasic setSelectedPage={setSelectedPage}>Join now</ButtonBasic>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
