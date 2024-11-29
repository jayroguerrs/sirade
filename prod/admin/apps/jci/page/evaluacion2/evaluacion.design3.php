<!--begin::Content-->
<div id="kt_app_content" class="app-content  flex-column-fluid ">
    <!--begin::Content container-->
    <div id="kt_app_content_container" class="app-container  container-fluid ">

        <!--begin::Contacts App- Add New Contact-->
        <div class="row g-7">
            <!--begin::Content-->
            <div class="col-m-12">
                <!--begin::Contacts-->
                <div class="card card-flush h-lg-100" id="kt_contacts_main" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 60%) !important;">
                    <!--begin::Card header-->
                    <div class="card-header pt-7" id="kt_chat_contacts_header">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Svg Icon | path: icons/duotune/communication/com005.svg-->
                            <span class="svg-icon svg-icon-1 me-2"><svg width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                                        fill="currentColor" />
                                    <path opacity="0.3"
                                        d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                                        fill="currentColor" />
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                            <h2>Datos</h2>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--end::Card header-->

                    <!--begin::Card body-->
                    <div class="card-body pt-5">
                        <!--begin::Form-->
                        <form id="kt_ecommerce_settings_general_form" class="form" action="#">
                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semibold form-label mt-3">
                                    <span class="required">Trabajador</span>
                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="Enter the contact's name."></i>
                                </label>

                                <div class="w-100">
                                    <div class="form-floating border rounded">
                                        <select id="kt_ecomerce_select2_country" class="form-select form-select-solid lh-1 py-3" name="country" data-kt-ecommerce-settings-type="select2-flags" data-placeholder="SELECT">
                                            <option></option>
                                        </select>
                                    </div>
                                </div>
                                <!--end::Label-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Input group-->
                            <div class="fv-row mb-7">
                                <!--begin::Label-->
                                <label class="fs-6 fw-semibold form-label mt-3">
                                    <span>Jefe</span>

                                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                        title="Enter the contact's company name (optional)."></i>
                                </label>
                                <!--end::Label-->

                                <!--begin::Input-->
                                <input type="text" class="form-control form-control-solid" name="company_name" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;" />
                                <!--end::Input-->
                            </div>
                            <!--end::Input group-->

                            <!--begin::Row-->
                            <div class="row row-cols-1 row-cols-sm-2 rol-cols-md-1 row-cols-lg-2">
                                <!--begin::Col-->
                                <div class="col">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="fs-6 fw-semibold form-label mt-3">
                                            <span class="required">Desempeño</span>

                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                                title="Enter the contact's email."></i>
                                        </label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="email" class="form-control form-control-solid" name="email" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;" />
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->

                                </div>
                                <!--end::Col-->

                                <!--begin::Col-->
                                <div class="col">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="fs-6 fw-semibold form-label mt-3">
                                            <span>Area</span>

                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                                title="Enter the contact's phone number (optional)."></i>
                                        </label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" class="form-control form-control-solid" name="phone" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;" />
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->

                            <!--begin::Row-->
                            <div class="row row-cols-1 row-cols-sm-2 rol-cols-md-1 row-cols-lg-2">
                                <!--begin::Col-->
                                <div class="col">
                                    <!--begin::Input group-->
                                    <div class="fv-row mb-7">
                                        <!--begin::Label-->
                                        <label class="fs-6 fw-semibold form-label mt-3">
                                            <span>Bimestre</span>

                                            <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                                                title="Enter the contact's city of residence (optional)."></i>
                                        </label>
                                        <!--end::Label-->

                                        <!--begin::Input-->
                                        <input type="text" class="form-control form-control-solid" name="city" value="" style="box-shadow: 0 2px 6px 0 rgb(67 89 113 / 50%) !important;"/>
                                        <!--end::Input-->
                                    </div>
                                    <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->
                            <!--begin::Action buttons-->
                            <div class="d-flex justify-content-end">
                                <!--begin::Button-->
                                <button type="reset" data-kt-contacts-type="cancel" class="btn btn-light me-3">
                                    Cancel
                                </button>
                                <!--end::Button-->

                                <!--begin::Button-->
                                <button type="submit" data-kt-contacts-type="submit" class="btn btn-primary">
                                    <span class="indicator-label">
                                        Save
                                    </span>
                                    <span class="indicator-progress">
                                        Please wait... <span
                                            class="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>
                                <!--end::Button-->
                            </div>
                            <!--end::Action buttons-->
                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Contacts-->

            </div>
            <!--end::Content-->
        </div>
        <!--end::Contacts App- Add New Contact-->
    </div>
    <!--end::Content container-->
</div>
<!--end::Content-->
</div>
<!--end::Content wrapper-->




<div class="accordion accordion-solid accordion-toggle-plus" id="accordionExample6">
	<div class="card">
		<div class="card-header" id="headingOne6">
			<div class="card-title" data-toggle="collapse" data-target="#collapseOne6">
				<i class="flaticon-pie-chart-1"></i> Product Inventory
			</div>
		</div>
		<div id="collapseOne6" class="collapse show" data-parent="#accordionExample6">
			<div class="card-body">
				...
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-header" id="headingTwo6">
			<div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo6">
				<i class="flaticon2-notification"></i> Order Statistics
			</div>
		</div>
		<div id="collapseTwo6" class="collapse" data-parent="#accordionExample6">
			<div class="card-body">
				...
			</div>
		</div>
	</div>
	<div class="card">
		<div class="card-header" id="headingThree6">
			<div class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree6">
				<i class="flaticon2-chart"></i> eCommerce Reports
			</div>
		</div>
		<div id="collapseThree6" class="collapse" data-parent="#accordionExample6">
			<div class="card-body">
				...
			</div>
		</div>
	</div>
</div>


<!-- ESTE ES UN EJEMPLO DE MARCACION -->




<form class="form">
	<div class="card-body">
		<div class="form-group m-0">
			<label>Choose Delivery Type:</label>
			<div class="row">
				<div class="col-lg-6">
					<label class="option">
						<span class="option-control">
							<span class="radio">
								<input type="radio" name="m_option_1" value="1" checked="checked"/>
								<span></span>
							</span>
						</span>
						<span class="option-label">
							<span class="option-head">
								<span class="option-title">
									Standard Delivery
								</span>
								<span class="option-focus">
									Free
								</span>
							</span>
							<span class="option-body">
								Estimated 14-20 Day Shipping
								(Duties and taxes may be due
								upon delivery)
							</span>
						</span>
					</label>
				</div>
				<div class="col-lg-6">
					<label class="option">
						<span class="option-control">
							<span class="radio">
								<input type="radio" name="m_option_1" value="1"/>
								<span></span>
							</span>
						</span>
						<span class="option-label">
							<span class="option-head">
								<span class="option-title">
									Fast Delivery
								</span>
								<span class="option-focus">
									$&nbsp;8.00
								</span>
							</span>
							<span class="option-body">
								Estimated 2-5 Day Shipping
								(Duties and taxes may be due
								upon delivery)
							</span>
						</span>
					</label>
				</div>
			</div>
		</div>

		<div class="separator separator-dashed my-8"></div>

		<div class="form-group">
			<label>Membership:</label>
			<div class="row">
				<div class="col-lg-6">
					<label class="option option-plain">
						<span class="option-control">
							<span class="radio">
								<input type="radio" name="m_option_1" value="1" checked="checked"/>
								<span></span>
							</span>
						</span>
						<span class="option-label">
							<span class="option-head">
								<span class="option-title">
									Premium Partner
								</span>
							</span>
							<span class="option-body">
								30 days free trial and lifetime free updates
							</span>
						</span>
					</label>
				</div>
				<div class="col-lg-6">
					<label class="option option option-plain">
						<span class="option-control">
							<span class="radio">
								<input type="radio" name="m_option_1" value="1" checked="checked"/>
								<span></span>
							</span>
						</span>
						<span class="option-label">
							<span class="option-head">
								<span class="option-title">
									Free Membership
								</span>
							</span>
							<span class="option-body">
								24/7 support and Lifetime access
							</span>
						</span>
					</label>
				</div>
			</div>
		</div>
	</div>
	<div class="card-footer">
		<button type="reset" class="btn btn-primary mr-2">Submit</button>
		<button type="reset" class="btn btn-secondary">Cancel</button>
	</div>
</form>



















<!--begin:Option-->
<label class="d-flex flex-stack mb-5 cursor-pointer">
    <!--begin:Label-->
    <span class="d-flex align-items-center me-2">
        <!--begin:Icon-->
        <span class="symbol symbol-50px me-6">
            <span class="symbol-label bg-light-primary">
                <!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
                <span class="svg-icon svg-icon-1 svg-icon-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    ....
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </span>
        </span>
        <!--end:Icon-->

        <!--begin:Info-->
        <span class="d-flex flex-column">
            <span class="fw-bold fs-6">Quick Online Courses</span>
            <span class="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
        </span>
        <!--end:Info-->
    </span>
    <!--end:Label-->

    <!--begin:Input-->
    <span class="form-check form-check-custom form-check-solid">
        <input class="form-check-input" type="radio"  name="category" value="1"/>
    </span>
    <!--end:Input-->
</label>
<!--end::Option-->

<!--begin:Option-->
<label class="d-flex flex-stack mb-5 cursor-pointer">
    <!--begin:Label-->
    <span class="d-flex align-items-center me-2">
        <!--begin:Icon-->
        <span class="symbol symbol-50px me-6">
            <span class="symbol-label bg-light-danger">
                <!--begin::Svg Icon | path: icons/duotune/general/gen025.svg-->
                <span class="svg-icon svg-icon-1 svg-icon-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    ....
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </span>
        </span>
        <!--end:Icon-->

        <!--begin:Info-->
        <span class="d-flex flex-column">
            <span class="fw-bold fs-6">Face to Face Discussions</span>
            <span class="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
        </span>
        <!--end:Info-->
    </span>
    <!--end:Label-->

    <!--begin:Input-->
    <span class="form-check form-check-custom form-check-solid">
        <input class="form-check-input" type="radio" name="category" value="2"/>
    </span>
    <!--end:Input-->
</label>
<!--end::Option-->

<!--begin:Option-->
<label class="d-flex flex-stack cursor-pointer">
    <!--begin:Label-->
    <span class="d-flex align-items-center me-2">
        <!--begin:Icon-->
        <span class="symbol symbol-50px me-6">
            <span class="symbol-label bg-light-success">
                <!--begin::Svg Icon | path: icons/duotune/general/gen013.svg-->
                <span class="svg-icon svg-icon-1 svg-icon-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    ....
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </span>
        </span>
        <!--end:Icon-->

        <!--begin:Info-->
        <span class="d-flex flex-column">
            <span class="fw-bold fs-6">Full Intro Training</span>
            <span class="fs-7 text-muted">Creating a clear text structure copywriting</span>
        </span>
        <!--end:Info-->
    </span>
    <!--end:Label-->

    <!--begin:Input-->
    <span class="form-check form-check-custom form-check-solid">
        <input class="form-check-input" type="radio" name="category" value="3"/>
    </span>
    <!--end:Input-->
</label>
<!--end::Option-->











<!--begin::Option-->
<input type="radio" class="btn-check" name="radio_buttons_2" value="apps" checked="checked"  id="kt_radio_buttons_2_option_1"/>
<label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-5" for="kt_radio_buttons_2_option_1">
    <!--begin::Svg Icon | path: icons/duotune/coding/cod001.svg-->
    <span class="svg-icon svg-icon-4x me-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        ....
        </svg>
    </span>
    <!--end::Svg Icon-->

    <span class="d-block fw-semibold text-start">
        <span class="text-dark fw-bold d-block fs-3">Authenticator Apps</span>
        <span class="text-muted fw-semibold fs-6">
            Get codes from an app like Google Authenticator,  Microsoft Authenticator, Authy or 1Password.
        </span>
    </span>
</label>
<!--end::Option-->

<!--begin::Option-->
<input type="radio" class="btn-check" name="radio_buttons_2" value="sms" id="kt_radio_buttons_2_option_2"/>
<label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center" for="kt_radio_buttons_2_option_2">
    <!--begin::Svg Icon | path: icons/duotune/communication/com003.svg-->
    <span class="svg-icon svg-icon-4x me-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        ....
        </svg>
    </span>
    <!--end::Svg Icon-->

    <span class="d-block fw-semibold text-start">
        <span class="text-dark fw-bold d-block fs-3">SMS</span>
        <span class="text-muted fw-semibold fs-6">We will send a code via SMS if you need to use your backup login method.</span>
    </span>
</label>
<!--end::Option-->






    <!--begin::Header-->
                                        <div class="accordion-header py-3 d-flex collapsed" data-bs-toggle="collapse" data-bs-target="#kt_accordion_2_item_3">
                                            <span class="accordion-icon"><span class="svg-icon svg-icon-4"><svg>...</svg></span></span>
                                            <h3 class="fs-4 fw-semibold mb-0 ms-4">What are the support terms & conditions ?</h3>
                                        </div>