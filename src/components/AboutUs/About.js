import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div class="card text-center">
                    <div class="card-header">
                        <h4>About Us</h4>
                    </div>
                    <div class="card-body">
                        <p class="card-text justify-text">The idea of forming an association for the welfare of community member was proposed by 
                        <strong>Shri S Raja Rao  , N G Vasudev Moorthy , S Ramakrishna ,Dr. K . Raghunath Rao, SriPrakash N, K Ramachandra Rao </strong> 
                        and  others  at a meeting in Kolar in early 2003. 
                        In  order to carry  forward this proposal, a meeting was convened in May 2003 on the auspicious day of <strong>“Akshaya Thritiya “</strong> at Gangamma Kalyana Mantapa , Jayanagar 4th T Block , Bangalore, which was attended by about 150 members. 
                        It was in this meeting that the name of the sangha  <b>‘AKSHAYA VIPRA MAHA SABHA “</b> was proposed and accepted by the members unanimously.  </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default AboutUs;

