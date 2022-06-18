import { Link } from "react-router-dom";
import './index.css';

function header() {
	return (
		<div className="header-content">
			<img alt="header" src="https://yandex-images.clstorage.net/9IPR93h31/e23dd0AkMye/cP-8m9taVrDhtnnRUU11YAM5sms-j_I3aHayLGe4cyXscMBZFFXqA_zMcWnbz74gzqZ0OZoDLFuXV_pOxVcZTmQub50cyZQwoba6kxePNKLBOnBqO44yoX2wc2-3emR16KdUQlrd9kvyU6j30pEgZtok4Gwcha7JWNj5GF9Php_ytj5a2sRZfa-le5OZT7KnlXj4rCzAbrHi4zZhvunscah8ioHR0_0JcVDmuVrb5inb6-qjUhcgxNKeal6RQsaXOnl229_D3z9h5XXS1E60Zxy_d2ghDix7a2D1rvhm7DGkdQoEGB77QnecKD-SHmqrGO6rI1tWrE7cGuVWHk0A0HM4vppTAhky5Oh0nxjNMSBdPrctqMbpeGsn8mx1Lub7b3OMjpeVPAU80qm2EhFmJFRm6eCXl-YEVJKgkJHGDlE2sHYe24uc_GWjddFXyb-sVXp5q6WFZ7ZoanavOOjjvydzQkgdkDIJfVIvOR0SIOvW5yutmZ8khpmdYtEZiIDbvrMwmdIBXXWvILvalom1Itsx8qshCe456uox7frmJbHq-8IAVx08SjydqfiVVuFilqRrJxgSZMRVU6FQmoaNVrz8-J6UiJzxqWv3UBmB8qNaeLZsJYQgv2WhOa-47-c2Zr5DAxHYc4f7Guw0GVCp4BLj6iAWnG0B35VkUJMLjpZ5-zrRU0EXPaap8l1ZBbXu2zy2ZyxLLjwhoXNmPydruC6zSsyYUXqD9dZg-J1fYmqYKmol1lZiT5IRKBgdy8rfuzA11NwJkPtn67RQGM62bJw8PShmBC_2ZST1rrstLnCkNUSN3JVyxT3RqTaW3iapmWph5F4QJYpTXaJf24WHWzux_VQSDJl9bKv12VHGtWXTP7OmrARmt2Rr_WA1aaY3ZbnIxhcYOk_4mio-Edvpah-mLKXcHu2NntwkX18Pj1JzMzYbXc-WMmPge1AXQbIv0b8_7ezOK3yrpXKkeo"/>
			<span className="span-header"></span>
			<div className="header-links">
			<Link className="header-link" to="/content"> Города </Link>
			<Link className="header-link" to="/content2"> Пещеры </Link>
			<Link className="header-link" to="/content3"> Достопримечательность </Link>
			<Link className="header-link" to="/content4"> Дворцы </Link>
			<Link className="header-link" to="/"> Главная </Link>
			</div>
		</div>
	
	)
  }
  
  export default header