import { Link } from "@remix-run/react";

export default function header() {
    return (
      <div className="w-full h-16 bg-[#08090A]">
        <div className="w-[1024px] h-full px-6 mx-[248px] flex items-center">
          <div className="w-[236px] h-8 flex items-start pt-1">
            <Link to="/">
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 400 100" fill="#ffffff">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9266 16.3713c-.5283.5806-.4933 1.4714.0617 2.0265l68.5946 68.5946c.5551.555 1.4459.59 2.0265.0617 10.0579-9.1522 16.3713-22.3478 16.3713-37.0179C99.9807 22.402 77.5788 0 49.9445 0 35.2744 0 22.0788 6.31337 12.9266 16.3713ZM4.35334 29.3894c-.25348.5589-.12567 1.2142.30824 1.6481L68.9432 95.3191c.4339.4339 1.0892.5617 1.6481.3083 1.485-.6736 2.9312-1.4176 4.3344-2.2277.8341-.4815.9618-1.6195.2808-2.3005L8.88146 24.7742c-.68097-.681-1.81894-.5532-2.30045.2808-.81013 1.4032-1.55411 2.8494-2.22767 4.3344ZM.453579 47.796c-.300979-.301-.46112014-.7158-.4327856-1.1405.1327026-1.9891.3816396-3.9463.7400796-5.865.214926-1.1505 1.620727-1.5497 2.448307-.7222L59.9124 96.7715c.8275.8276.4283 2.2334-.7222 2.4483-1.9187.3585-3.8759.6074-5.865.7401-.4247.0283-.8395-.1318-1.1405-.4328L.453579 47.796ZM3.93331 61.7589c-1.0331-1.0331-2.70028-.1429-2.32193 1.2683C6.22104 80.2203 19.7604 93.7597 36.9535 98.3693c1.4112.3784 2.3014-1.2888 1.2683-2.3219L3.93331 61.7589ZM201.602 27.535c3.587 0 6.494-2.918 6.494-6.5175S205.189 14.5 201.602 14.5c-3.586 0-6.493 2.918-6.493 6.5175s2.907 6.5175 6.493 6.5175Zm-55.621 56.8396V14.5039h11.54v59.648h31.115v10.2227h-42.655Zm82.136-28.511v28.511h-11.166V34.8555h11.026v8.4876l.14-.0937c1.121-2.6573 2.928-4.8769 5.42-6.6589 2.491-1.8132 5.668-2.7198 9.531-2.7198 3.426 0 6.54.766 9.344 2.2978 2.803 1.5006 5.045 3.7045 6.727 6.6119 1.682 2.9074 2.523 6.4713 2.523 10.6916v30.9026h-11.166V55.0195c0-3.7514-.997-6.5963-2.99-8.5345-1.962-1.9695-4.594-2.9543-7.896-2.9543-2.118 0-4.049.4377-5.793 1.313-1.744.8754-3.13 2.2196-4.158 4.0328-1.028 1.8132-1.542 4.1422-1.542 6.9871Zm101.105 27.6669c2.554 1.0942 5.482 1.6413 8.783 1.6413 2.71 0 5.03-.3439 6.961-1.0317 1.932-.719 3.52-1.6725 4.766-2.8605 1.277-1.1879 2.289-2.4853 3.037-3.8921h.187v6.9871h10.699V50.2833c0-2.4072-.468-4.6111-1.402-6.6119-.934-2.0008-2.289-3.7358-4.065-5.2051-1.744-1.4694-3.862-2.5948-6.354-3.3763-2.491-.8129-5.295-1.2193-8.409-1.2193-4.267 0-7.958.7347-11.073 2.204-3.084 1.4381-5.497 3.3763-7.242 5.8148-1.744 2.4384-2.694 5.1895-2.85 8.2531h10.793c.124-1.438.623-2.7198 1.495-3.8452.872-1.1254 2.056-2.0008 3.551-2.626 1.495-.6565 3.223-.9848 5.186-.9848 1.962 0 3.628.3283 4.999.9848 1.401.6565 2.476 1.5475 3.223 2.6729.748 1.1254 1.122 2.4384 1.122 3.939v.3752c0 1.1254-.39 1.9538-1.168 2.4853-.748.5314-2.025.9222-3.831 1.1723-1.776.2501-4.205.5471-7.289.891-2.523.2813-4.952.7034-7.288 1.2661-2.336.5627-4.423 1.3912-6.261 2.4853-1.806 1.0942-3.239 2.5479-4.298 4.3611-1.059 1.8132-1.588 4.1422-1.588 6.987 0 3.2826.747 6.0336 2.242 8.2532 1.495 2.1884 3.52 3.8453 6.074 4.9707Zm18.081-8.3001c-1.807.9691-4.034 1.4537-6.681 1.4537-2.679 0-4.813-.5627-6.401-1.6881-1.589-1.1567-2.383-2.7355-2.383-4.7362 0-1.5631.436-2.8293 1.308-3.7984.904-.9691 2.087-1.735 3.551-2.2977 1.464-.5628 3.052-.9535 4.765-1.1724 1.246-.1875 2.461-.3751 3.645-.5627 1.183-.2188 2.289-.422 3.317-.6096 1.028-.2188 1.9-.4377 2.616-.6565.748-.2188 1.293-.4533 1.635-.7034v5.5334c0 1.9382-.451 3.7202-1.355 5.3458-.872 1.5944-2.211 2.8917-4.017 3.8921Zm26.094 9.1442V34.8555h10.745v8.1594h.141c.903-2.8136 2.32-4.955 4.251-6.4244 1.962-1.5005 4.532-2.2508 7.709-2.2508.779 0 1.48.0312 2.102.0938.655.0312 1.2.0625 1.636.0937v10.082c-.405-.0625-1.122-.1406-2.149-.2344-1.028-.0938-2.118-.1407-3.271-.1407-1.838 0-3.519.422-5.046 1.2661-1.526.8441-2.741 2.1415-3.644 3.8921-.872 1.7195-1.308 3.8922-1.308 6.5182v28.4641h-11.166Zm-177.401 0V34.8555h11.166v49.5191h-11.166Zm84.238-2.204c3.582 2.2196 7.834 3.3294 12.755 3.3294 3.8 0 7.257-.6878 10.372-2.0633 3.146-1.4068 5.762-3.3294 7.849-5.7678 2.087-2.4697 3.442-5.3146 4.065-8.5346h-10.512c-.468 1.4693-1.231 2.7667-2.29 3.8921-1.027 1.0942-2.32 1.9539-3.877 2.5792-1.558.6252-3.364.9378-5.42.9378-2.772 0-5.155-.6252-7.148-1.8757-1.962-1.2505-3.457-2.9855-4.485-5.2051-.933-2.043-1.443-4.3564-1.529-6.9402h35.915v-3.0012c0-3.8139-.561-7.284-1.682-10.4102-1.121-3.1575-2.71-5.8773-4.766-8.1594-2.055-2.3134-4.531-4.0953-7.428-5.3458-2.866-1.2505-6.058-1.8757-9.578-1.8757-4.578 0-8.627 1.1098-12.147 3.3294-3.52 2.2196-6.276 5.2833-8.27 9.191-1.993 3.9078-2.99 8.3782-2.99 13.4114 0 5.0019.966 9.4568 2.897 13.3645 1.931 3.8765 4.688 6.9246 8.269 9.1442Zm23.501-32.7783c-1.028-2.1258-2.492-3.767-4.392-4.9237-1.9-1.1567-4.142-1.7351-6.728-1.7351-2.554 0-4.781.5784-6.681 1.7351-1.868 1.1567-3.332 2.7979-4.391 4.9237-.756 1.5396-1.234 3.2903-1.434 5.2521h25.059c-.2-1.9618-.678-3.7125-1.433-5.2521Z"/>
            </svg>
            </Link>
          </div>
          <div className="flex items-center space-x-1">
          {/* Product */}
          <div className="relative group">
            <div className="w-[72px] h-8 px-3 rounded-[8px] mr-2 pt-[5px] text-[#80848c] text-[13px] leading-[19.5px] font-medium cursor-pointer hover:bg-[#201f2d] hover:text-[#F7F8F8]">
              Product
            </div>

            {/* Menú desplegable */}
            <div className="absolute left-0 mt-3 p-2 w-[693px] h-[310px] bg-[#08090A] rounded-[8px] border border-[#62666D] text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              <div className="w-[676px] h-[235px] bg-[#161718] rounded-[8px] flex">
                <div className="w-[236px] h-[235px] px-7 pt-[20px] pb-8 border border-[#62666D] rounded-tl-[8px] rounded-bl-[8px]">
                  <span className="w-[180px] h-4 text-[12px] leading-[16.8px] font-medium text-[#62666D]"> Core Features </span>
                  <div className="w-[180px] h-[55px]">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Plan</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Set the product direction with projects and initiatives</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Build</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Make progress with issue tracking and cycle planning</p>
                  </div>
                </div>
                <div className="w-[440px] h-[235px] px-7 pt-[20px] pb-8 border border-[#62666D] rounded-tr-[8px] rounded-br-[8px]">
                  <span className="w-[180px] h-4 text-[12px] leading-[16.8px] font-medium text-[#62666D]"> More </span>
                  <div className="flex">
                  <div>
                  <div className="w-[178px] h-[38px]">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Customer requests</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Manage user feedback</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Insights</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Realtime analytics</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Linear Asks</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Workplace requests</p>
                  </div>
                  </div>
                  <div>
                  <div className="w-[178px] h-[38px]">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Integrations</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Collaborate across tools</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Mobile app</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Linear in your pocket</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Linear for Agents</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Collaborate with IA teammates</p>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="pt-5 pl-6 flex">
                  <p className="text-[12px] leading-6 font-medium text-[#F7F8F8]">New: Linear MCP Server 
                    <span className="text-[12px] leading-5 font-medium text-[#72757c] pl-2"> Connect AI models and agents with Linear </span>
                  </p>
                  <p className="text-[#828FFF] text-[12px] font-medium pl-40 pt-1"> Changelog </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="relative group">
            <div className="w-[89px] h-8 px-3 rounded-[8px] pt-[5px] text-[#80848c] text-[13px] leading-[19.5px] font-medium cursor-pointer hover:bg-[#201f2d] hover:text-[#F7F8F8]">
              Resources
            </div>

            {/* Menú desplegable */}
            <div className="absolute left-0 mt-3 p-2 w-[693px] h-[254px] bg-[#08090A] rounded-[8px] border border-[#62666D] text-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
              <div className="w-[676px] h-[235px] bg-[#161718] rounded-[8px] flex">
                <div className="w-[236px] h-[235px] px-7 pt-[20px] pb-8 border border-[#62666D] rounded-tl-[8px] rounded-bl-[8px]">
                  <span className="w-[180px] h-4 text-[12px] leading-[16.8px] font-medium text-[#62666D]"> Company </span>
                  <div className="w-[180px] h-[55px]">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">About</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Meet the team</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8]">Careers</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">We're hering</p>
                  </div>
                </div>
                <div className="w-[440px] h-[235px] px-7 pt-[20px] pb-8 border border-[#62666D] rounded-tr-[8px] rounded-br-[8px]">
                  <span className="w-[180px] h-4 text-[12px] leading-[16.8px] font-medium text-[#62666D]"> Explore </span>
                  <div className="flex">
                  <div>
                  <div className="w-[178px] h-[38px]">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Developers</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Build on the Linear API</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Security</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Safe, secure, and private</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Docs</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">How to use Linear</p>
                  </div>
                  </div>
                  <div>
                  <div className="w-[178px] h-[38px]">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Switch to Linear</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Migration guide</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Download</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Get the app</p>
                  </div>
                  <div className="w-[180px] h-[55px] pt-4">
                    <p className="text-[12px] leading-6 font-medium text-[#F7F8F8] pt-[12px]">Quality</p>
                    <p className="text-[12px] leading-5 font-medium text-[#72757c]">Conversations on quality</p>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <Link className="w-[67px] h-8 px-3 rounded-[8px] pt-[5px] text-[#80848c] text-[13px] leading-[19.5px] font-medium hover:bg-[#201f2d] hover:text-[#F7F8F8]" to="/pricing">
            Pricing
          </Link>
          <Link className="w-[91px] h-8 px-3 rounded-[8px] pt-[5px] text-[#80848c] text-[13px] leading-[19.5px] font-medium hover:bg-[#201f2d] hover:text-[#F7F8F8]" to="/customers">
            Customers
          </Link>
          <Link className="w-[51px] h-8 px-3 rounded-[8px] pt-[5px] text-[#80848c] text-[13px] leading-[19.5px] font-medium hover:bg-[#201f2d] hover:text-[#F7F8F8]" to="/blog">
            Blog
          </Link>
          <Link className="w-[73px] h-8 px-3 rounded-[8px] pt-[5px] text-[#80848c] text-[13px] leading-[19.5px] font-medium hover:bg-[#201f2d] hover:text-[#F7F8F8]" to="/contact">
            Contact
          </Link>
          <div className="w-[236px] h-8 flex items-end justify-end gap-2">
            <a className="w-[61px] h-8 px-3 rounded-[8px] pt-[5px] text-[#80848c] text-[12px] leading-[19.5px] font-medium hover:bg-[#201f2d] hover:text-[#F7F8F8]" 
               href=""> Log in </a>
               <a className="w-[72px] h-8 px-3 rounded-[8px] pt-[5px] bg-[#e6e6e6] text-[#171819] text-[13px] leading-[19.5px] font-medium hover:bg-[#ffffff] hover:text-[#1e1f20]" 
               href=""> Sign up </a>
          </div>
        </div>
        {/* ejemplo de como cambiar de ruta (las rutas se llaman igual a los archivos) */}
        {/**<Link to="/pricing">Ir a Pricing</Link> */}
      </div>
    );
  }
  