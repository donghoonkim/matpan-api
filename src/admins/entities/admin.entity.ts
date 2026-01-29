import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('TB_ADMIN')
export class Admin {
  @PrimaryColumn({ length: 30, comment: '운영자 아이디 (영문, 숫자 포함 8~30자)' })
  admin_id: string;

  @Column({ length: 255, comment: '비밀번호 (암호화)' })
  password: string;

  @Column({ length: 50, comment: '담당자명' })
  name: string;

  @Column({ length: 20, comment: '전화번호' })
  phone: string;

  @Column({ length: 100, comment: '이메일' })
  email: string;

  @Column({ length: 50, nullable: true, comment: '직위' })
  position: string;

  @Column({ type: 'json', nullable: true, comment: '권한 설정 (각 메뉴별 읽기/쓰기 권한)' })
  permission_settings: any;

  @Column({ type: 'timestamp', nullable: true, comment: '최근 접속일' })
  last_login_dt: Date;

  @CreateDateColumn({ comment: '등록일' })
  reg_dt: Date;

  @UpdateDateColumn({ nullable: true, comment: '수정일' })
  mod_dt: Date;
}
