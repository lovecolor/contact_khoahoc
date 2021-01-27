/* eslint-disable */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="layout">
      <div className="header">
        <div className='header_left'>
          <img className='logo_left' src='https://serene-heyrovsky-8b035d.netlify.app/static/logo-d9f229951c3979b737f961c12ce203a2.png'></img>
          <h3>HỘI CHÉM GIÓ VIỆT NAM</h3>
          <h1 className='chuongtrinh'>CHƯƠNG TRÌNH</h1>
          <h1 className='react_2021'>REACT 2021</h1>
          <h1 className='date'>Đà Nẵng, 1/2021</h1>
        </div>
        <div className='header_right'>
          <img className='logo_right' src={logo}></img>

        </div>
      </div>
      <div className="thamgiadaotao">
        <div className='thamgiadaotao_title'>
          <div className='line_start'></div>
          <div className='line_end'></div>
          <h1>THAM GIA ĐÀO TẠO</h1>
        </div>
        <div className='thamgiadaotao_content'>
          <div className='item'>
            <img className='avt' src='https://serene-heyrovsky-8b035d.netlify.app/static/vunhat-159134b9e27f3064f14a02693501bd05.jpg'></img>
            <h3>PHAN NGÔ NHẬT VŨ</h3>
            <p><i>1+ EXP Dev NodeJS tại ACworks Co.Ltd.</i></p>
          </div>
          <div className='item'>
            <img className='avt' src='https://serene-heyrovsky-8b035d.netlify.app/static/vunguyen-ec84abe8c2a447e833036057623b8509.jpg'></img>
            <h3>NGUYỄN TRẦN VŨ</h3>
            <p><i>1+ EXP Dev ReactJS</i></p>
          </div>
          <div className='item'>
            <img className='avt' src='https://serene-heyrovsky-8b035d.netlify.app/static/sonml-98ef0aba7528255d528cfa9ca715bb19.jpg'></img>
            <h3>TRẦN VĂN ANH SƠN</h3>
            <p><i>Dev tại ACEXIS Joint Stock</i></p>
          </div>
          <div className='item'>
            <img className='avt' src='https://serene-heyrovsky-8b035d.netlify.app/static/tuine-2d5e3487e014c809626ecefdfd26a50b.jpg'></img>
            <h3>TUI NÈ</h3>
            <p><i>1+ EXP Full-Stack Dev tại ACEXIS Joint Stock</i></p>
          </div>
        </div>
      </div>
      <div className="chuongtrinhdaotao">
        <div className='title'>
          <div className='line_start'></div>
          <div className='line_end'></div>
          <h1>CHƯƠNG TRÌNH ĐÀO TẠO</h1>
        </div>
        <div className='content'>
          <div className='header'>
            <div className='point left'></div>
            <div className='header_content'>
              <h2>PHẦN CƠ BẢN</h2>
              <p>(không giới hạn só lượng người tham dự)</p>
            </div>
            <div className='point right'></div>

          </div>


          <div className='container'>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 1</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>Ghi danh</li>
                  <li>Giới thiệu về ReactJS</li>
                  <li>Cài đặt môi trường cần thiết cho khóa học</li>
                  <li>Tạo React App đầu tiên (Hello world!)</li>
                  <li>Tạo React App giới thiệu bản thân (sử dụng html/css)</li>
                </ul>
              </div>
            </div>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 2</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>JSX là gì ?</li>
                  <li>Biểu thức trong JSX</li>
                  <li>Render Element</li>
                  <li>Cập nhật React App của bạn (sử dụng Object, Array, Biểu thức)</li>

                </ul>
              </div>
            </div>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 3</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>Component và Props (Cách phân chia cấu trúc)</li>
                  <li>Composing Component</li>
                  <li>Extracting Components</li>
                  <li>Cập nhật React App của bạn (Phân chia theo Component và Props)</li>

                </ul>
              </div>
            </div>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 5 - Buổi 6</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>State and LifecycleGhi danh</li>
                  <li>Định nghĩa state trong Class và Function</li>
                  <li>setState</li>
                  <li>Lifecycle</li>
                  <li>Điều kiện render - Rerender</li>
                  <li>Cập nhật React App của bạn (Hiển thị yêu thích và ghét với 1 button switch mode hiển thị)</li>
                </ul>
              </div>
            </div>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 7 - Buổi 8</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>Xử lý sự kiện và Form</li>
                  <li>Lấy dữ liệu của Form</li>
                  <li>Refs</li>
                  <li>Tạo React App todo list (hiển thị danh sách công việc, thêm, sửa, xóa)</li>

                </ul>
              </div>
            </div>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 9</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>API và fetch ở React</li>
                  <li>Sử dụng với API mặc định và với các API đã được chuẩn bị</li>

                </ul>
              </div>
            </div>
            <div className='container_item'>
              <div className='container_item_left'>
                <h3>Buổi 10 - Buổi 11</h3>
              </div>
              <div className='container_item_right'>
                <ul>
                  <li>react-router-dom</li>
                  <li>Cài đặt và thiết lập react-router-dom và React App</li>
                  <li>Bài tập cuối khóa (Quản lý các biểu mẫu khảo sát khách hàng)</li>

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
