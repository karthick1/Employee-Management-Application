package com.demo.employee.dao.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Entity class used to map with employee table fields
 * 
 * @author Karthick
 *
 */
@Entity
@Table(name = "tblemployee")
public class Employee {
	@Id
	@GeneratedValue
	@Column(name = "Emp_Id")
	private Integer empId;
	@Column(name = "Emp_Name")
	private String empName;
	@Column(name = "Email_Id")
	private String emailId;
	@Column(name = "Mobile_No")
	private long mobileNo;
	@Column(name = "Country_Code")
	private String countryCode;
	@Column(name = "Alt_Mobile_No")
	private String altMobileNo;
	@Column(name = "Address")
	private String address;
	@Column(name = "City")
	private String city;
	@Column(name = "Country")
	private String country;
	@Column(name = "Company_Name")
	private String companyName;
	@Column(name = "Created_By	")
	private Integer createdBy;
	@Column(name = "Created_Date")
	private Date createdDate;
	@Column(name = "Last_Modified_by")
	private Integer lasteModifiedBy;
	@Column(name = "Last_Modified_Date")
	private Date lastModifiedDate;
	@Column(name = "Is_Active")
	private Boolean active;

	public Integer getEmpId() {
		return empId;
	}

	public void setEmpId(Integer empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getAltMobileNo() {
		return altMobileNo;
	}

	public void setAltMobileNo(String altMobileNo) {
		this.altMobileNo = altMobileNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Integer getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Integer getLasteModifiedBy() {
		return lasteModifiedBy;
	}

	public void setLasteModifiedBy(Integer lasteModifiedBy) {
		this.lasteModifiedBy = lasteModifiedBy;
	}

	public Date getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(Date lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", emailId=" + emailId + ", mobileNo=" + mobileNo
				+ ", countryCode=" + countryCode + ", altMobileNo=" + altMobileNo + ", address=" + address + ", city="
				+ city + ", country=" + country + ", companyName=" + companyName + ", createdBy=" + createdBy
				+ ", createdDate=" + createdDate + ", lasteModifiedBy=" + lasteModifiedBy + ", lastModifiedDate="
				+ lastModifiedDate + ", active=" + active + "]";
	}

}
