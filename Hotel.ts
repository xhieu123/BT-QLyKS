//Để quản lý khách hàng đến thuê phòng của một khách sạn, người ta cần các thông tin sau:
// Số ngày thuê, loại phòng, thông tin cá nhân của những người thuê phòng.
// Biết rằng phòng loại A có giá 500$, phòng loại B có giá 300$ và loại C có giá 100$.
// Với mỗi cá nhân cần quản lý các thông tin sau: Họ tên, tuổi, số chứng minh nhân dân.
// Yêu cầu 1: Hãy xây dựng lớp Nguoi để quản lý thông tin cá nhân của những người thuê phòng.
// Yêu cầu 2: Xây dựng lớp KhachSan để quản lý các thông tin về các phòng trong khác sạn.
// Yêu cầu 3: Xây dựng các phương thức thêm mới, xoá khách theo số chứng minh nhân dân.
// Tính tiền thuê phòng cho khách(xác định khách bằng số chứng minh nhân dân) dựa vào công thức:
// (số ngày thuê * giá của từng loại phòng)
class HoaDon { // pojo: mô tả dữ liệu
    private _cmnd: string;
    private _ten: string;
    private _tuoi: number;
    private _soNgayThue: number;
    private _loaiPhong: string;

    constructor(cmnd: string, ten: string, tuoi: number, soNgayThue: number, loaiPhong: string) {
        this._cmnd = cmnd;
        this._ten = ten;
        this._tuoi = tuoi;
        this._soNgayThue = soNgayThue;
        this._loaiPhong = loaiPhong;
    }

    get cmnd(): string {
        return this._cmnd;
    }

    set cmnd(value: string) {
        this._cmnd = value;
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get tuoi(): number {
        return this._tuoi;
    }

    set tuoi(value: number) {
        this._tuoi = value;
    }

    get soNgayThue(): number {
        return this._soNgayThue;
    }

    set soNgayThue(value: number) {
        this._soNgayThue = value;
    }

    get loaiPhong(): string {
        return this._loaiPhong;
    }

    set loaiPhong(value: string) {
        this._loaiPhong = value;
    }
}

class KhachSan {
    listHoaDon: HoaDon[] = [];

    them(hoaDon: HoaDon) {
        this.listHoaDon.push(hoaDon);
    }

    xoa(cmnd: string) {
        this.listHoaDon = this.listHoaDon.filter(item => item.cmnd !== cmnd);
    }

    tinhTien(cmnd: string) {
        let sumMoney = 0;
        for (let i = 0; i < this.listHoaDon.length; i++) {
            if (this.listHoaDon[i].cmnd === cmnd) {
                if (this.listHoaDon[i].loaiPhong === 'A') sumMoney += this.listHoaDon[i].soNgayThue * 500;
                if (this.listHoaDon[i].loaiPhong === 'B') sumMoney += this.listHoaDon[i].soNgayThue * 400;
                if (this.listHoaDon[i].loaiPhong === 'C') sumMoney += this.listHoaDon[i].soNgayThue * 300;
            }
        }
        console.log('Tổng tiền của khách là: ' + sumMoney);
    }

    hienThi() {
        console.table(this.listHoaDon)
    }
}