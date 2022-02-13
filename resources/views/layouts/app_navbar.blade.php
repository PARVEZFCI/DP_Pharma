<div class="row">

    <!-- Profile Info and Notifications -->
    <div class="col-md-6 col-sm-8 clearfix">

        <ul class="user-info pull-left pull-right-xs pull-none-xsm">

        </ul>

    </div>


    <!-- Raw Links -->
    <div class="col-md-6 col-sm-4 clearfix hidden-xs">

        <ul class="list-inline links-list pull-right">
            <li>
                <router-link to="/admin/profile/password">
                    <i class="fa fa-key"></i> Password
                </router-link>
            </li>
            <li class="sep"></li>
            <li>
                <router-link to="/admin/profile/settings">
                    <i class="entypo-tools right"></i> Profile
                </router-link>
            </li>
            <li class="sep"></li>

            <li>
                <form method="POST" action="{{ route('logout') }}" class="d-none">
                    @csrf
                    <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                    this.closest('form').submit();">
                       Logout <i class="entypo-logout right"></i>
                    </a>
                </form>
            </li>


        </ul>

    </div>

</div>
