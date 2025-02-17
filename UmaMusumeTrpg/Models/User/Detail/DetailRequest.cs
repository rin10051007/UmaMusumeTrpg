﻿using UmaMusumeTrpg.Models.Base.Detail;

namespace UmaMusumeTrpg.Models.User.Detail;

public class DetailRequest(DetailSelect select) : BaseDetailRequest(select)
{
    public new DetailSelect Select { get; set; } = select;
}