import Logo from '@/assets/logo.png'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16 '>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt='logo image' />
          <p className='my-5 '>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
            Body Shapes That you Dream of.. Get Your Dream Body Now.
          </p>
          <p>(c) Name company etc info</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold '>Links:</h4>
          <p className='my-5'>Home</p>
          <p className='my-5'>About Us</p>
          <p className='my-5'>Advertising</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold '>Contact</h4>
          <p className='my-5'>Link number one</p>
          <p className='my-5'>Link number two</p>
          <p className='my-5'>Link number tree</p>
        </div>
      </div>
    </footer>
  )
}
